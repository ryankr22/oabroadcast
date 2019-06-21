import React from 'react';
import PropTypes from 'prop-types';

const TextInputPrimitive = props => { 
    
    const handleFocus = (event) => event.target.select();
    
    return (                        
        <input {...props}  onFocus={handleFocus} />        
    );     
}  

export default TextInputPrimitive; 

TextInputPrimitive.propTypes = {
    id: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
  };

TextInputPrimitive.defaultProps = {
    disabled: false,
    required: false,
    defaultValue: "",
    placeholder: "Please enter a value",
    type: "text"
    
}