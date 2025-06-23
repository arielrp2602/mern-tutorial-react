import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { ROUTES } from './enums/index.js';
import { notesRoutes } from './routes/index.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rate-limiter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
// needed middleware to access param values
app.use(express.json());
app.use(rateLimiter);
app.use(
  cors({
    origin: '*',
  })
);

// routes
app.use(ROUTES.NOTES, notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
