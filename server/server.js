import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {router as workoutsRoutes} from './routes/workouts.js';
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use('/api/workouts', workoutsRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
