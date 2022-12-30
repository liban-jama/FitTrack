import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.json({mssg: "Welcome to the app!"})
});
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
