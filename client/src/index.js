import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Wrapping our Context around the entire app from index.js as we can't import the App component into our WorkoutContext.js file !
  <React.StrictMode>
    <WorkoutsContextProvider> /
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);

 