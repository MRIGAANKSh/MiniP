import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3001;

// Set up the PostgreSQL pool connection
const pool = new Pool({
  user: 'postgres',       // Your PostgreSQL username
  host: 'localhost',      // Database host (use localhost or your host's IP)
  database: 'campuscrib_db', // The database name
  password: 'Mrigaank&2402', // Your PostgreSQL password
  port: 5432,             // Default PostgreSQL port
});

app.use(cors());
app.use(express.json());

// API endpoint to fetch all listings from the database
app.get('/api/listings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM listings');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ message: 'Error fetching listings' });
  }
});

// API endpoint to fetch a single listing by ID
app.get('/api/listings/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('SELECT * FROM listings WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (err) {
    console.error('Error fetching listing by id:', err);
    res.status(500).json({ message: 'Error fetching listing' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
