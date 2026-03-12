import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  NEON_DB_URI: process.env.NEON_DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  ARCJET_KEY: process.env.ARCJET_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV
};
