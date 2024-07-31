import React from 'react';
import './main.css';
import ShortenButton from './shortenbutton.tsx'
import HandleState from './handlestate.tsx';

const Main = () => {
    return (
        <div className='main'>
            <img src='./src/assets/mainbg1.png' className='mainbg'></img>
            <img src='./src/assets/info.png' className='infotxt'></img>
            <img src='./src/assets/arrow_drop_down.png' className='arrow1'></img>
            <img src='./src/assets/arrow_drop_down-1.png' className='arrow2'></img>
            <img src='./src/assets/arrow_drop_down-2.png' className='arrow3'></img>
            <HandleState/>
    </div>
    );
}

export default Main;