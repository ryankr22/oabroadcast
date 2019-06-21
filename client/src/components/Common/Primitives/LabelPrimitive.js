import React from 'react';
import PropTypes from 'prop-types';

const LabelPrimitive = ({caption, ...props}) => {         
    return (                        
        <label {...props}> 
            {caption} 
        </label> 
    );     
}  

export default LabelPrimitive; 

LabelPrimitive.propTypes = {
    caption: PropTypes.string.isRequired    
  };