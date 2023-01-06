import { createContext } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ( {children}) => { // Will take in Children as props and children represents whatever custom components that this function name 'WorkoutsContextProvider' wraps and we call it in index.js in order to wrap the entire App component

  return ( // Going to use this Context Provider component to wrap whatever parts of our application needs access to the Context
  // In this case the Context will have access to the entire application, the whole component tree so each component has access.
    <WorkoutsContext.Provider> 
        {children}
    </WorkoutsContext.Provider>
  )
}