import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { dbConnection } from './config/db.js';
import { ENV } from './config/env.js';
import { clerkMiddleware } from '@clerk/express';
import arcjetMiddleware from './middleware/arcjetMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import clerkRoutes from './routes/clerkRoutes.js';

const app = express();

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev')); // log the request
app.use(arcjetMiddleware); // Rate limit

// API Routes
app.use('/api/user', clerkRoutes);
app.use('/api/product', productRoutes);

async function startServer() {
  try {
    await dbConnection();
    app.listen(ENV.PORT, () => {
      console.log(`🟢 Server is running on PORT: ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('🔴 Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
