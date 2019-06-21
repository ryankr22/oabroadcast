import React from 'react';
import './Button.css';

const Button = ({displayText, ...props}) => {        
    return (           
        <button {...props}> { displayText } </button>        
    );      
}

export default Button;