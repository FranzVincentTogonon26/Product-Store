import { arcjetInstance } from '../utils/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await arcjetInstance.protect(req, {
      requested: 1 // specifies that each request consumes 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ message: 'Too Many Requests' });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ message: 'Bot access denied' });
      } else {
        res.status(403).json({ message: 'Forbidden' });
      }
      return;
    }

    // check for spoofed bots
    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
      res.status(403).json({ message: 'Spoofed bot detected' });
      return;
    }

    next();
  } catch (error) {
    console.log('Arcjet error', error);
    next(error);
  }
};

export default arcjetMiddleware;
