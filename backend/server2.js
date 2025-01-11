import express from 'express';
import pkg from 'pg';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 3001;

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Middleware to parse JSON request body
app.use(express.json());

// Utility function to hash passwords
const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return { hashedPassword, salt };
};

// Sign up route
app.post('/api/signup', async (req, res) => {
  const { username, email, password, userType } = req.body;

  if (!username || !email || !password || !userType) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const emailCheckResult = await pool.query(
      'SELECT * FROM details WHERE email = $1',
      [email]
    );
    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    const { hashedPassword, salt } = hashPassword(password);

    const insertResult = await pool.query(
      'INSERT INTO details (username, email, password, salt, user_type) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [username, email, hashedPassword, salt, userType]
    );

    res.status(201).json({
      message: 'Signup successful!',
      userId: insertResult.rows[0].id,
    });
  } catch (err) {
    console.error('Error during signup:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while signing up. Please try again.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
