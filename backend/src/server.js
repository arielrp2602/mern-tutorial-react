import express from 'express';

import { ROUTES } from './enums/index.js';
import { notesRoutes } from './routes/index.js';

const app = express();
const PORT = 5001;

app.use(ROUTES.NOTES, notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
