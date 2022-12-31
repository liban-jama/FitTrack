import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
}, {timestamps: true});

const workoutModel = mongoose.model('Workout', workoutSchema);

export default workoutModel;