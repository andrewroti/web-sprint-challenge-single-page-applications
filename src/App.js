import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Form.js';
import './App.css';

import Confirmation from './Confirmation';

const App = () => {
 
 
 
 
  return (
    <div className="App">
    <div className="App-header">
      <nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link className="App-link" to='/'>Home</Link><br></br>
      <Link className="App-link" to="/pizza">Order Pizza</Link>
      </nav>
    
    <Route path="/pizza">
      <Form/>
    </Route>
    <Route path='/confirmation'>
      <Confirmation />
    </Route>
        
    
    </div>
    </div>
    
    
  );
};
export default App;
