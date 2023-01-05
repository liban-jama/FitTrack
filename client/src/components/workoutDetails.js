
const WorkoutDetails = ({ workout }) => { //destructure from the props the prop we pass through in Home.js which is workout
  console.log({workout});
  return (
  <div className = "workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Weight lbs: </strong>{workout.weight}</p>
    <p><strong>Number of Reps: </strong>{workout.reps}</p>
    <p>{workout.createdAt}</p> 
   </div> 
  );

}
export default WorkoutDetails