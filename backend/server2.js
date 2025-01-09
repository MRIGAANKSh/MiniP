import express from 'express';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';

const app = express();
const port = 3001;

// PostgreSQL connection
const pool = new Pool({
  user: 'campuscrib_kw8c_user', // Replace with your database username
  host: 'dpg-ctvr068gph6c73cf1830-a.oregon-postgres.render.com',
  database: 'campuscrib_kw8c', // Replace with your database name
  password: 'Mu6evkjfBL0qnO4oTkTiI7fRPv1zChnL', // Replace with your database password
  port: 5432,
});

// Middleware to parse JSON request body
app.use(express.json());

// Sign up route
app.post('/api/signup', async (req, res) => {
  const { username, email, password, userType } = req.body;

  // Validate input
  if (!username || !email || !password || !userType) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if email already exists in the database
    const emailCheckResult = await pool.query('SELECT * FROM details WHERE email = $1', [email]);
    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user details into the 'details' table
    const insertResult = await pool.query(
      'INSERT INTO details (username, email, password, user_type) VALUES ($1, $2, $3, $4) RETURNING id',
      [username, email, hashedPassword, userType]
    );

    // Respond with success
    res.status(201).json({ message: 'Signup successful!', userId: insertResult.rows[0].id });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'An error occurred while signing up. Please try again.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
