import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

// Create rate limit that allows 10 requests per 20 secs
const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  /* 
        X s significa que después de haber sido bloquedo por muchos intentos,
        se va a quitar el block en X s (segundos)
    */
  limiter: Ratelimit.slidingWindow(10, '20 s'),
});

export default rateLimit;
