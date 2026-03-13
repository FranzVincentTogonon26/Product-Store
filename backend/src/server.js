import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { dbConnection } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import { ENV } from './config/env.js';
// import { arcjetInstance } from './utils/arcjet.js';

import productRoutes from './routes/productRoutes.js';
import clerkRoutes from './routes/clerkRoutes.js';

const app = express();

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

// security middleware
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(morgan('dev')); // log the request

// apply arcjet rate-limit to all routes
// app.use(async (req, res, next) => {
//   try {
//     const decision = await arcjetInstance.protect(req, {
//       requested: 1 // specifies that each request consumes 1 token
//     });

//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         res.status(429).json({ error: 'Too Many Requests' });
//       } else if (decision.reason.isBot()) {
//         res.status(403).json({ error: 'Bot access denied' });
//       } else {
//         res.status(403).json({ error: 'Forbidden' });
//       }
//       return;
//     }

//     // check for spoofed bots
//     if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
//       res.status(403).json({ error: 'Spoofed bot detected' });
//       return;
//     }

//     next();
//   } catch (error) {
//     console.log('Arcjet error', error);
//     next(error);
//   }
// });

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
