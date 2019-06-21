import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxPrimitive = props => {         
    return (
        <React.Fragment>                                  
            <input type="checkbox" {...props} />                                              
        </React.Fragment>
    );      
}

export default CheckBoxPrimitive;

CheckBoxPrimitive.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  CheckBoxPrimitive.defaultProps = {
    disabled: false,
    required: false,
}