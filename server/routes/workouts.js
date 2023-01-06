import express from 'express';
import { createNewWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout} from '../controllers/workoutControllers.js';

const router = express.Router();
//GET all the workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getSingleWorkout );

//POST a new workout
router.post('/', createNewWorkout );

//DELETE a new workout
router.delete('/:id',deleteWorkout);


//UPDATE a new workout
router.patch('/:id', updateWorkout);

export {router};

