import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js';

const authMiddleware = async (req, res, next) => {
  try {
    // get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No Authentication token, access denied..'
      });
    }

    // Verify token
    const decodeToken = jwt.verify(token, ENV.JWT_SECRET);
    if (!decodeToken) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token..'
      });
    }

    req.user = {
      id: decodeToken.id,
      email: decodeToken.email
    };

    next();
  } catch (error) {
    console.log(`Auth middleware error: ${error}`);
    res.status(401).json({
      success: false,
      message: 'Token is not valid..'
    });
  }
};

export default authMiddleware;
