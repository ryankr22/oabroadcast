import React from 'react';


const RadioButtonPrimitive = props => {              
    return (
        <div >                   
            {props.options.map(opt => 
                {   
                    let caption = opt.Caption.replace(/<\/?[^>]+(>|$)/g, "");
                    return(      
                        <div key={opt.Value} className="radioOption">                      
                            <input 
                                checked={props.defaultValue === opt.Value} 
                                type="radio" 
                                key={caption} 
                                id={props.id} 
                                name={props.id} 
                                value={opt.Value} 
                                onChange={props.selectOnChange}
                                disabled={props.disabled}
                                required={props.required} 
                                />                                                            
                            <label>{caption}</label>                                                 
                        </div>
                    );
                }
            )}                                       
        </div>
    );      
}

export default RadioButtonPrimitive;