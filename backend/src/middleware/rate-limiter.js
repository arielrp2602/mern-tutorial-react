import rateLimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
  try {
    // en lugar de my-limit-key, se deberia poner el ID del usuario o la IP
    const { success } = await rateLimit.limit('my-limit-key');

    if (!success) {
      return res.status(429).json({
        message: 'Too many requests, please try again later',
      });
    }
  } catch (error) {
    console.log('Rate limit error', error);
    next(error);
  }
};

export default rateLimiter;
