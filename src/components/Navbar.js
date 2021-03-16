import React, { useState, useEffect} from 'react' ;
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className="navbar-logo" onClick={closeMobileMeni}>
                        <img src='/images/logo.png' />
                        DoinGud
                        < i class = 'fab fa-typo3' />
                    </Link>
                </div>
            </nav>
        </>

    )
};

export default Navbar; 