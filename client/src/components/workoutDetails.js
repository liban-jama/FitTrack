import {useWorkoutsContext } from '../hooks/useWorkoutsContext.js';
const WorkoutDetails = ({ workout }) => { //destructure from the props the prop we pass through in Home.js which is workout
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    
    const response = await fetch ('http://localhost:4000/api/workouts/' + workout._id, {
      method: "DELETE"
    })
    const json = await response.json();

    if (response.ok) {
      // Here we want to dispatch to update global state
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
  <div className = "workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Weight lbs: </strong>{workout.weight}</p>
    <p><strong>Number of Reps: </strong>{workout.reps}</p>
    <p>{workout.createdAt}</p> 
    <span onClick = {handleClick}>delete</span>
   </div> 
  );

}
export default WorkoutDetails