import React from 'react';
import Button from './Button';


function PopUp(props){
    
    return(
        <div className='popup'>
            <div className='pop-content'>
            <p>{props.text}</p>
            <Button title='Ok' onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default PopUp;