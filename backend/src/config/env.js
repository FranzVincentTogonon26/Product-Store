import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  NEON_DB_URI: process.env.NEON_DB_URI,
  ARCJET_KEY: process.env.ARCJET_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY
};
