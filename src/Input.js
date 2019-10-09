import React from 'react';

function Input(props){
    return(
        <div className='input-field'>
            <input 
            name={props.name} 
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </div>
    )
}

export default Input;