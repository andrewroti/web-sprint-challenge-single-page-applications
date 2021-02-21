import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Form.js';

import Confirmation from './Confirmation';

const App = () => {
 
 
 
 
  return (
    
    <div className="header-container">
      <nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to='/'><button>Home</button></Link><br></br>
      <Link to="/pizza"><button>Order Pizza</button></Link>
      </nav>
    
    <Route path="/pizza">
      <Form/>
    </Route>
    <Route path='/pizza/confirmation'>
      <Confirmation />
    </Route>
        
    
    </div>
    
    
  );
};
export default App;
