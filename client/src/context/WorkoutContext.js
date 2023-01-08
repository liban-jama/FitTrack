import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext(); // Utimately this "WorkoutsContext" will now have access to the enire App component

export const workoutsReducer = (state, action) => {
   switch (action.type) {
      case 'SET_WORKOUTS':
        return {
          workouts: action.payload
        }
      case 'CREATE_WORKOUT':
        return {
          workouts: [action.payload, ...state.workouts] // to spread the current state of workout property // state is previous state, workouts is an array of preexisting workouts objects
        }
      default:
        return state
   }
}

export const WorkoutsContextProvider = ( {children}) => { // Will take in Children as props and children represents whatever custom components that this function name 'WorkoutsContextProvider' wraps and we call it in index.js in order to wrap the entire App component
  const [state, dispatch]  = useReducer(workoutsReducer, { // Takes in a function name "workoutsReducer", and an object. // Similar to useState in that we do get a state value and function to update that state value // whats different is this workoutREducer function
    workouts:null 
  });


  return ( // Going to use this Context Provider component to wrap whatever parts of our application needs access to the Context
  // In this case the Context will have access to the entire application, the whole component tree so each component has access.
   // Meaning this below also has acess to the App Component
   <WorkoutsContext.Provider value = {{...state, dispatch}}> 
        {children}
    </WorkoutsContext.Provider>
  );

};