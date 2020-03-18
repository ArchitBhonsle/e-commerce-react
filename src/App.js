import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
