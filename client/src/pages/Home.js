import {useEffect} from 'react';
import {useWorkoutsContext } from '../hooks/useWorkoutsContext.js';
// components
import WorkoutDetails from '../components/workoutDetails.js';
import WorkoutForm from '../components/WorkoutForm.js';


const Home = () => {

  // Fetch ALL Workouts from Server and list them in the home page -- UseEffect Hook

  const {workouts, dispatch} = useWorkoutsContext(); // Call our Context for global use

  useEffect( () => { // Hook fires function when the component is rendered 
    const fetchAllWorkouts = async () => { // another function within because we want to use async/await and useEffect should not be async
   
      const response = await fetch('http://localhost:4000/api/workouts/');
      const json = await response.json(); // becomes an array of objects from the DB, where each object represents a workout

      if(response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json});
       }
      }
      
    fetchAllWorkouts(); // call the function we just instantiated 

  }, [dispatch]); // we will fire whenever dispatch updates


  return (
    <div className="home">
    <div className="workouts">
      {workouts && workouts.map(workout => (
        <WorkoutDetails workout={workout} key={workout._id} />
      ))}
    </div>
    <WorkoutForm />
  </div>
  )
};

export default Home