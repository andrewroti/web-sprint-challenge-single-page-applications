import React from 'react';

function Confirmation(props){
    const {firstName} = props;
    


    return(
        <h1>Order Submitted for {firstName}</h1>

    )
}

export default Confirmation;