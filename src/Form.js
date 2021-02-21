import React, { useState , useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required').min(2, 'Name must be at least 2 letters'),
    lastName: yup.string().required('Last name is required').min(2, 'Name must be at least 2 letters'),
    address: yup.string().required('Address is required'),
    size: yup.string().oneOf(['sml', 'med', 'lrg', 'xl'], 'Please pick a size')

})

const orderURL = 'https://reqres.in/api/pizza/order'


function Form(){

    const [form, setForm] = useState({firstName: '', lastName: '', address: '', size: '', toppings: [], instructions: ''})
    const [order, setOrder] = useState([]);
    const [disabled, setDisabled] = useState(true);
  

    const handleSubmit = event =>{
        event.preventDefault();
        const newOrder = {
            firstName: form.firstName, 
            lastName: form.lastName, 
            address: form.address, 
            size: form.size, 
            toppings: form.toppings,
            instructions: form.instructions
        }
        axios.post(orderURL, newOrder)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
         
     }
     
    
    const handleChanges = event =>{
        setForm({...form, [event.target.name]: event.target.value});
        console.log(form)
        
    }
    useEffect(()=>{
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])
    
    
    
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
                        <option value='sml'>Small (8")</option>
                        <option value='med'>Medium (12")</option>
                        <option value='lrg'>Large (14")</option>
                        <option value='xl'>Extra Large (16")</option>
                    </select>
                </label><br/>
                <div className='toppings' onChange={handleChanges}>
                    <h3>Select Your Toppings</h3>
                    <ul>
                        <li><label> Pepperoni:  <input type='checkbox' name='toppings' value='pepperoni'/> </label></li>
                        <li><label> Sausage:  <input type='checkbox' name='toppings' value='sausage'/> </label></li>
                        <li><label> Green Peppers:  <input type='checkbox' name='toppings' value='greenPeppers'/> </label></li>
                        <li><label> Olives:  <input type='checkbox' name='toppings' value='olives'/> </label></li>
                    </ul>
                    <div>
                        <label>
                            <input type='text' placeholder='Special Instructions?' name='instructions' onChange={handleChanges}/>
                        </label>
                    </div>
                </div>

                

            {/* <Link to='/confirmation'> */}
                <button disabled={disabled}>
                    Add To Order
                </button>
            {/* </Link> */}
            
            
            </form>
            
        </div>
        
    </div>
        
    );
}

export default Form;