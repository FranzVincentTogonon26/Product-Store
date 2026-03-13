import { verifyToken } from '@clerk/backend';
import { ENV } from '../config/env.js';

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.replace('Bearer ', '');

    const session = await verifyToken(token, {
      secretKey: ENV.CLERK_SECRET_KEY
    });

    req.user = session;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
