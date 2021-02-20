import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Confirmation from './Confirmation.js'

function Form(){

    return(
        
        <div>
            <Link to='/Confirmation'>
                <button>
                    Submit
                </button>
            </Link>
            
            <Route path='/Confirmtaion'>
                <Confirmation/>
            </Route>

        </div>
        
    );
}

export default Form;