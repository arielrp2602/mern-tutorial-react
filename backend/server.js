import express from 'express';
import { notes } from './routes/index.js';
import { Routes } from './enums/index.js';

const app = express();
const PORT = 5001;

app.use(Routes.NOTES, notes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
