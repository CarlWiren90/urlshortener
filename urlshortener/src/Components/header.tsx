import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src='./src/assets/Yourfavorite.png' className='yourfavoritetxt'></img>  
            <img src='./src/assets/Link shortener.png' className='linkshortenertxt'></img>
            <img src='./src/assets/Line 1.png' className='line'></img>
        </div>
    );
}

export default Header;