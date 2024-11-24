import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'campuscrib_db',
  password: 'Mrigaank&2402',
  port: 5432,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL');
    client.release();
  } catch (err) {
    console.error('Connection error', err.stack);
  }
}

testConnection();
