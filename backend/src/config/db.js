import pkg from 'pg';

import { ENV } from './env.js';
import { runMigration } from '../scripts/migrate.js';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: ENV.NEON_DB_URI
});

const REQUIRED_TABLES = ['users', 'products'];

// check database tables
async function checkTables() {
  const result = await pool.query(`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public'
    `);

  const existingTables = result.rows.map((row) => row.table_name);

  const missingTables = REQUIRED_TABLES.filter((table) => !existingTables.includes(table));

  return missingTables;
}

// Database Connection
export const dbConnection = async () => {
  try {
    const missingTables = await checkTables();
    if (missingTables.length > 0) {
      console.log('🟡 Missing tables:', missingTables);
      await runMigration();
    }

    await pool.query('SELECT NOW()');
    console.log('🟢 Connected to Neon Postgress Database');
  } catch (error) {
    console.error(`🔴 Database connection test failed: ${error}`);
    process.exit(1);
  }
};

// Export the pool and a convenient query function
export default {
  pool,
  query: (text, params) => pool.query(text, params)
};
