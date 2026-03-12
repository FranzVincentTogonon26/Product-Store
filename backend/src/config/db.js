import pkg from 'pg';
import { ENV } from './env.js';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: ENV.NEON_DB_URI
});

// Database Connection
export const dbConnection = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('🟢 Connected to Neon Postgress Database');
  } catch (error) {
    console.error(`❌ Database connection test failed: ${error}`);
    process.exit(1);
  }
};

// Export the pool and a convenient query function
export default {
  pool,
  query: (text, params) => pool.query(text, params)
};
