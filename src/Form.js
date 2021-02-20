import React from 'react';
import { Link } from 'react-router-dom';


function Form(){

    return(
        
        <div>
            <form>
                <label>
                    First Name:
                    <input type='text' name='firstName'/><br/>
                </label>
                <label>Last Name: 
                    <input type='text' name='lastName'/><br/>
                </label>
                <label> Delivery Address: 
                    <input type='text' name='address'/><br/>
                </label>
                <label>
                    Size: 
                    <select name='size'>
                        <option>---Select A Size---</option>
                        <option>Small (8")</option>
                        <option>Medium (12")</option>
                        <option>Large (14")</option>
                        <option>Extra Large (16")</option>
                    </select>
                </label><br/>
                <div className='toppings'>
                    <h3>Select Your Toppings</h3>
                    <ul>
                        <li><label> Pepperoni:  <input type='checkbox'/> </label></li>
                        <li><label> Sausage:  <input type='checkbox'/> </label></li>
                        <li><label> Green Peppers:  <input type='checkbox'/> </label></li>
                        <li><label> Olives:  <input type='checkbox'/> </label></li>
                    </ul>
                    <div>
                        <label>
                            <input type='text' placeholder='Special Instructions?' name='instructions'/>
                        </label>
                    </div>
                </div>

                

            <Link to='/Confirmation'>
                <button>
                    Submit
                </button>
            </Link>
            
            </form>
        </div>
        
    );
}

export default Form;