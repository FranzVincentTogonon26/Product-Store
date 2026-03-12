import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { ENV } from './config/env.js';
import { arcjet } from './utils/arcjet.js';
import { dbConnection } from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security middleware
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

// log the request
app.use(morgan('dev'));

// apply arcjet rate-limit to all routes
app.use(async (req, res, next) => {
  try {
    const decision = await arcjet.protect(req, {
      requested: 1 // specifies that each request consumes 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ error: 'Too Many Requests' });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: 'Bot access denied' });
      } else {
        res.status(403).json({ error: 'Forbidden' });
      }
      return;
    }

    // check for spoofed bots
    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
      res.status(403).json({ error: 'Spoofed bot detected' });
      return;
    }

    next();
  } catch (error) {
    console.log('Arcjet error', error);
    next(error);
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);

async function startServer() {
  try {
    await dbConnection();
    app.listen(ENV.PORT, () => {
      console.log(`🟢 Server is running on PORT: ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
