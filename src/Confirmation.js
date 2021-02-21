import React from 'react';
import axios from 'axios';

function Confirmation(props){
    const {firstName} = props;
    
        // axios.get('https://reqres.in/api/pizza/order')
        // .then(res=>{
        //     console.log(res.data);
        // })
        // .catch(err=>{
        //     console.log(err.data);
        // })
    return(
        <h1>Order Submitted for {firstName}</h1>

    )
}

export default Confirmation;