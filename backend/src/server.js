import express from 'express';

import { ENV } from './config/env.js';
import { dbConnection } from './config/db.js';

const app = express();

async function startServer() {
  try {
    await dbConnection();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on PORT: ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
