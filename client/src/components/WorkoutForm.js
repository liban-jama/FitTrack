// import { useState } from "react";
// import {useWorkoutsContext } from '../hooks/useWorkoutsContext.js';

// const WorkoutForm = () => {
//   const { dispatch } = useWorkoutsContext();

//   const [title, setTitle] = useState("");
//   const [weight, setWeight] = useState("");
//   const [reps, setReps] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); /*  To prevent normal action of submitting the page as it normally refreshes the page when user hits submit button*/

//     // Dummy workout object that we are going to send as body of request

//     const workout = { title, weight, reps };

//     // fetch api to now send a POST request

//     const response = await fetch("http://localhost:4000/api/workouts/", {
//       method: "POST",
//       body: JSON.stringify(workout),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = response.json();
//     if (!response.ok) {
//       setError(json.error);
//       setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setTitle("");
//       setWeight(""); // updating state to empty string in case we want to addd another workout
//       setReps("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New Workout Added!");
//       dispatch({type: 'CREATE_WORKOUT', payload: json});
//     }
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a NEW Workout! </h3>

//       <label>Exercise Title: </label>
//       <input
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         className = {emptyFields.includes('title') ? 'error' : ''}
//       />

//       <label>Exercise Weight: </label>
//       <input
//         type="text"
//         onChange={(e) => setWeight(e.target.value)}
//         value={weight}
//         className = {emptyFields.includes('weight') ? 'error' : ''}
//       />

//       <label>Exercise Reps: </label>
//       <input
//         type="text"
//         onChange={(e) => setReps(e.target.value)}
//         value={reps}
//          className = {emptyFields.includes('reps') ? 'error' : ''}
//       />

//       <button>Add Workout</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default WorkoutForm;
import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, weight, reps}
    
    const response = await fetch('http://localhost:4000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setWeight('')
      setReps('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Weight (in lbs):</label>
      <input 
        type="number" 
        onChange={(e) => setWeight(e.target.value)} 
        value={weight}
        className={emptyFields.includes('weight') ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm