import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import {router as workoutsRoutes} from './routes/workouts.js';
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());

app.use('/api/workouts', workoutsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Connected to DB and Listening on port", process.env.PORT);
  });  
})
.catch((error) => {
  console.log(error)
});

