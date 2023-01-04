import {useEffect, useState} from 'react';
// components
import WorkoutDetails from '../components/workoutDetails.js';
const Home = () => {

  // Fetch ALL Workouts from Server and list them in the home page -- UseEffect Hook

  const [workouts, setWorkouts] = useState(null);

  useEffect( () => { // Hook fires function when the component is rendered 
    
    const fetchAllWorkouts = async () => { // another function within because we want to use async/await and useEffect should not be async
      try {
      const response = await fetch('http://localhost:4000/api/workouts');
      const json = await response.json(); // becomes an array of objects from the DB, where each object represents a workout

      if(response.ok) {
        setWorkouts(json); //update state to pass in json
       }
       else {
        throw new Error (`Failed to fetch workouts: ${response.status} ${response.statusText}`);
       }
      } catch (error) {
        console.error(error);
        setWorkouts(null); // update state to be NULL if there was an error 
      }
    }
    fetchAllWorkouts(); // call the function we just instantiated 

  }, []); // we only want to fire the useEffect once when it first is rendered not fetch it multiple times so as a second argument we pass in an empty array


  return (
  <div className = "home">
    <h2> Home </h2> 
    
    <div className = "workouts"> 
  {workouts ? (
    <div>
      {workouts.map((workout) => (
        // <div>
        // <p key = {workout._id}>{workout.title}</p>
        // <p key = {workout._id}>{workout.weight}</p>
        // <p key = {workout._id}>{workout.reps}</p>
        // <p key = {workout._id}>{workout.createdAt}</p>
        // </div>
        <WorkoutDetails key = {workout._id} workout = {workout} />
      ))}
    </div>
  ) : (
    <p>An Error occured while fetching the workouts</p>
  )}
</div>

  </div>
  )
};

export default Home