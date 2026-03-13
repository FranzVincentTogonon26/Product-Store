import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';

import { ENV } from '../config/env.js';

const { Pool } = pkg;
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const pool = new Pool({
  connectionString: ENV.NEON_DB_URI,
  ssl: ENV.NEON_DB_URI ? { rejectUnauthorized: false } : false
});

export const runMigration = async () => {
  const client = await pool.connect();

  try {
    console.log('Running database migration..');

    const schemaPath = path.join(_dirname, '../config', 'Schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf-8');

    await client.query(schemaSql);
    console.log('Database migration completed successfully..');
    console.log('Tables created..');
  } catch (error) {
    console.log(`Migration failed: ${error.message}`);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
};
