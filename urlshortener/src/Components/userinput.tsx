import React, {useState} from 'react';
import './userinput.css';


const Userinput = ({inputChange}) => {
    const handleUserInput = (event) => {
        inputChange(event.target.value);
    };

    return (
        <input
            className='userInput'
            onChange={handleUserInput}
            type='text'
            placeholder='Link goes here!'
        />
    );
}

export default Userinput;