import express from 'express';
import dotenv from 'dotenv';

import { ROUTES } from './enums/index.js';
import { notesRoutes } from './routes/index.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(ROUTES.NOTES, notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
