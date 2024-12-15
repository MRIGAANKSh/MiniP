import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Pool } = pkg;

const app = express();
const port = 3001;

// Set up the PostgreSQL pool connection using environment variables
const pool = new Pool({
  user: process.env.PG_USER,       // PostgreSQL username from .env
  host: process.env.PG_HOST,       // Database host from .env
  database: process.env.PG_DATABASE, // Database name from .env
  password: process.env.PG_PASSWORD, // PostgreSQL password from .env
  port: process.env.PG_PORT || 5432, // Default PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // This allows self-signed certificates used by Render
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to fetch all listings from the database
app.get('/api/listings', async (req, res) => {
  const searchTerm = req.query.search;

  try {
    let query = 'SELECT * FROM listings';
    let queryParams = [];

    // If a search term is provided, filter by nearby_college
    if (searchTerm) {
      query += ' WHERE LOWER(nearby_college) = LOWER($1)';
      queryParams = [searchTerm];
    }

    const result = await pool.query(query, queryParams);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching listings:', err.message);
    res.status(500).json({ message: 'Error fetching listings', error: err.message });
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
    console.error('Error fetching listing by id:', err.message);
    res.status(500).json({ message: 'Error fetching listing', error: err.message });
  }
});

// Default error handler for unhandled routes
app.use((req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
