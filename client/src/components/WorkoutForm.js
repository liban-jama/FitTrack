import { useState } from "react";

const WorkoutForm = () => {

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // To prevent normal action of submitting the page as it normally refreshes the page when user hits submit button
    
    // Dummy workout object that we are going to send as body of request

    const workout = {title, weight, reps};

    // fetch api to now send a POST request

    const response = await fetch('http://localhost:4000/api/workouts/', {
      method: `POST`,
      body: JSON.stringify(workout), // changes workout variable to JSON
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = response.json();

    if(!response.ok ) {
      setError(json.error); 
    }
    if (response.ok) {
      setTitle('');
      setWeight(''); // updating state to empty string in case we watn to addd another workout
      setReps('');
      setError(null);
      console.log("New Workout Added!")
    }

  }

  return (

    <form classname = "create" onSubmit={handleSubmit}>
      <h3>Add a NEW Workout! </h3>

      <label>Excersize Tile: </label>
      <input
       type = "text"
       onChange={(e) => setTitle(e.target.value)}
       value={title}
       />


      <label>Excersize Weight: </label>
      <input
       type = "text"
       onChange={(e) => setWeight(e.target.value)}
       value={weight}
       />


      <label>Excersize Reps: </label>
      <input
       type = "text"
       onChange={(e) => setReps(e.target.value)}
       weight={reps}
       />

       <button> Add Workout</button>
       {error && <div className = "error"> {error}</div>}
    </form>


  );
}

export default WorkoutForm;