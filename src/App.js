import React from 'react';
import {Route} from 'react-router-dom'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Imdbheader  from './features/Imdbheader/Imdbheader';
import Imdbcarousal  from './features/Imdbcarousal/Imdbcarousal';
import Movielist  from './features/Movielist/Movielist';

import './App.css';

function App() {
  return (
    <div className="App">
    <Route 
      exact 
      path="/" 
      render={() => (
        <div>
          <Imdbheader />
          <Imdbcarousal />
          <Movielist/>
        </div>
      )}
    />
      
      <Route 
        exact 
        path="/movie" 
        render={() => (<Movielist/>)}
      />
    </div>
  );
}

export default App;
