import express from 'express';

const router = express.Router();

//GET all the workouts
router.get('/', (req, res) => {
  res.json({mssg: "GET all workouts"});
});

// GET a single workout
router.get('/:id', (res, req) => {
  res.json({mssg: "GET a single workout"});
});

//POST a new workout

router.post('/', (res, req) => {
  res.json({mssg: "POST a single workout"});
});

//DELETE a new workout

router.delete('/:id', (res, req) => {
  res.json({mssg: "DELETE a single workout"});
});


//UPDATE a new workout

router.patch('/:id', (res, req) => {
  res.json({mssg: "UPDATE a single workout"});
});

export {router};

