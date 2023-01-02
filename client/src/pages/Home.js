import {useEffect, useState} from 'react';

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
      {workouts ? ( // Ternary if TRUE render code within first set of braces if FALSE run code within second set of braces

        workouts.map((workout) => (  // Now we want to cycle through our workouts but only when we have some || Normal braces not curly since we want to return a template
        // Only if we have a value for workouts then we will start to map through them
        <p key = {workout._id}>{workout.title}</p>
      ))
      ) : (
        <p>An Error occured while fetching the workouts</p>
      )
    }
    </div>
  </div>
  )
};

export default Home