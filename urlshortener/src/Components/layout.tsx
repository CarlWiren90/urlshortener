import React from 'react';
import './layout.css';
import Header from './header.tsx'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <div className='main'>{children}</div>
        </>
    );
}

export default Layout;