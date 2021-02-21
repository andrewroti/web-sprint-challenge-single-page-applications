import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Confirmation from './Confirmation.js'


function Form(){

    const [form, setForm] = useState({})
    const [order, setOrder] = useState([]);

    const handleSubmit = event =>{
        event.preventDefault();
         console.log('Clicked!')
         setOrder(...order, form);
         
     }
     console.log(form.firstName);
    
    const handleChanges = event =>{
        setForm({...form, [event.target.name]: event.target.value});
        
    }
    
    
    return(
       <div>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type='text' name='firstName' onChange={handleChanges}/><br/>
                </label>
                <label>Last Name: 
                    <input type='text' name='lastName' onChange={handleChanges}/><br/>
                </label>
                <label> Delivery Address: 
                    <input type='text' name='address' onChange={handleChanges}/><br/>
                </label>
                <label>
                    Size: 
                    <select name='size' onChange={handleChanges}>
                        <option>---Select A Size---</option>
                        <option>Small (8")</option>
                        <option>Medium (12")</option>
                        <option>Large (14")</option>
                        <option>Extra Large (16")</option>
                    </select>
                </label><br/>
                <div className='toppings' onChange={handleChanges}>
                    <h3>Select Your Toppings</h3>
                    <ul>
                        <li><label> Pepperoni:  <input type='checkbox' name='pepperoni'/> </label></li>
                        <li><label> Sausage:  <input type='checkbox' name='sausage'/> </label></li>
                        <li><label> Green Peppers:  <input type='checkbox' name='greenPeppers'/> </label></li>
                        <li><label> Olives:  <input type='checkbox' name='olives'/> </label></li>
                    </ul>
                    <div>
                        <label>
                            <input type='text' placeholder='Special Instructions?' name='instructions' onChange={handleChanges}/>
                        </label>
                    </div>
                </div>

                

            <Link to='/pizza/confirmation'>
                <button >
                    Add To Order
                </button>
            </Link>
            
            
            </form>
            
        </div>
        
    </div>
        
    );
}

export default Form;