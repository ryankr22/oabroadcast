import React from 'react';
import SelectOptions from './SelectOptions';

const Select = props => {    
    let css = props.controlOptions.IsVisible === false ? 'd-none' : 'form-group';           
    return (
        <div className={css}>                            
            <label htmlFor={props.controlOptions.ID}>{props.controlOptions.Caption}</label>  
                                
            <select className={props.cssClasses}  id={props.controlOptions.ID} onChange={props.selectOnChange} disabled={!props.controlOptions.IsEnabled} required={props.controlOptions.IsRequired} > 
                <option value={props.placeHolder}>{props.placeHolder}</option>                                                           
                <SelectOptions defaultValue={props.controlOptions.Value} options={props.controlOptions.SelectableValues} />                                                                                                                                                           
            </select>                                                            
        </div>
    );       
}

export default Select;