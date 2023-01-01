import express from 'express';
import { createNewWorkout, getAllWorkouts, getSingleWorkout} from '../controllers/workoutControllers.js';
const router = express.Router();
//GET all the workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getSingleWorkout );

//POST a new workout

router.post('/', createNewWorkout );

//DELETE a new workout

router.delete('/:id', (req, res) => {
  res.json({mssg: "DELETE a single workout"});
});


//UPDATE a new workout

router.patch('/:id', (req, res) => {
  res.json({mssg: "UPDATE a single workout"});
});

export {router};

