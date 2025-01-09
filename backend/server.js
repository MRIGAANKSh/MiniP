import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Pool } = pkg;

const app = express();

// Use the environment variable PORT if available, otherwise default to 3001
const port = process.env.PORT || 3001;

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

// Existing API endpoints remain unchanged

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
  const id = parseInt(req.params.id, 10); // Ensure the ID is an integer
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid listing ID' });
  }

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

// API endpoint to handle booking requests
app.post('/api/bookings', async (req, res) => {
  const { listingId, numberOfRooms, message, name, phoneNumber } = req.body;

  // Validate required fields
  if (!listingId || !numberOfRooms || !message || !name || !phoneNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if listing exists before booking
    const listingResult = await pool.query('SELECT * FROM listings WHERE id = $1', [listingId]);
    if (listingResult.rows.length === 0) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Insert the booking details into the database
    const result = await pool.query(
      `INSERT INTO bookings (listing_id, number_of_rooms, message, name, phone_number) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [listingId, numberOfRooms, message, name, phoneNumber]
    );

    const newBooking = result.rows[0];

    // Respond with the newly created booking details
    res.status(201).json({
      message: 'Booking confirmed',
      booking: newBooking,
    });
  } catch (err) {
    console.error('Error creating booking:', err.message);
    res.status(500).json({ message: 'Error creating booking', error: err.message });
  }
});

