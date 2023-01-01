import myWorkoutModel from '../models/workoutModel.js';
import mongoose from 'mongoose';


// Get ALL Workouts
export const getAllWorkouts = async (req, res) => {
  const workouts = await myWorkoutModel.find({}).sort({createdAt: -1});
  
  res.status(200).json(workouts);

}

// Get a SINGLE Workout
export const getSingleWorkout = async (req, res) =>{
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No Such Workout"});
  }
  
  const workout = await myWorkoutModel.findById(id)
  if (!workout) {
    return  res.status(404).json({error: "Workout does not exist!"});
  }

  res.status(200).json(workout);
}

// CREATE a new Workout
export const createNewWorkout = async (req, res) => {

    const {title, reps, weight} = req.body;
    // add doc to DB
    try {
      const workout = await myWorkoutModel.create({title, weight, reps});
      res.status(200).json(workout);
    }
    catch (error) {
      res.status(400).json({error: error.message0});
    }
};

// DELETE a new Workout 


// UPDATE a new Workout