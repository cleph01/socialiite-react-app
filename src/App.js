import React from 'react';
import { Route, Link } from "react-router-dom";

import Home from './components/home';

import './App.css';

function App() {
  return (
    
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
