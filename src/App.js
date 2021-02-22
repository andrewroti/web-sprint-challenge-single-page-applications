import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Form.js';
import './App.css';

// import Confirmation from './Confirmation';

// I WAS UNABLE TO GET CYPRESS TO WORK PROPERLY.  I HAD POWER ISSUES DURING THAT LECTURE AND WAS BEHIND.  I INSTALLED IT HOW CANVAS DESCRIBED BUT
// WHENEVER I TRIED TO USE cy.visit(), "cy" WOULD ALWAYS BE UNDERLINED WITH RED SQUIGGLES IMPLYING IT ISN"T DEFINED.  I'M NOT SURE IF I WAS MISSING
// DEPENDENCIES OR WHAT.  THAT WAS THE MAIN ISSUE I RAN INTO AND DEFINITELY PLAN ON STUDYING TESTING EXTENSIVELY DURING BUILD WEEK. "sample_test.js" IN
// THE "intergration/examples" FOLDER IS WHERE I WAS TRYING TO USE CYPRESS.
// I ALSO HAD SOME TROUBLE TRYING TO PASS THE STATE OF MY FORM AS A PROP TO A CONFIRMATION PAGE.  I WANTED TO BUILD A SEPERATE ROUTE TO A CONFIRMATION
// PAGE THAT WOULD DISPLAY ALL OF THE ORDER DATA FROM FORM.JS.  I COULD ROUTE TO IT NO PROBLEM BUT UPON LOADING THE CONFIRMATION PAGE, MY POST REQUEST
// FROM FORM.JS WOULD DISAPPEAR FROM THE NETWORK TAB IN THE INSPECTOR/DEV TOOLS.  FOR THE TIME BEING I JUST HAD ORDER CONFIRMATION POP UP VIA AN ALERT
// UPON PRESSING THE ADD TO ORDER BUTTON.

const App = () => {
 
 
 
 
  return (
    <div className="App">
    <div className="App-header">
      <nav>
      <h1>Lambda Eats</h1>
      
      <Link className="App-link" to='/'>Home</Link><br></br>
      <Link className="App-link" to="/pizza">Order Pizza</Link>
      </nav>
    
    <Route path="/pizza">
      <Form/>
    </Route>
    {/* <Route path='/confirmation'>
      <Confirmation />
    </Route> */}
        
    
    </div>
    </div>
    
    
  );
};
export default App;
