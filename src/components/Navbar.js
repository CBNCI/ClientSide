import React from 'react';
import { Link } from 'react-router-dom';
import '../views/holiday.css';

function Navbar() {

    return(
        <nav class="py-2">
            <img src='/logowhite.png' className="" style={{width: '20px' }}></img> &nbsp;
            <Link className="white" to="/">RPC US Travel</Link> &nbsp;
            <Link className="white mx-4" to="/contact">Contact</Link> &nbsp;
            <Link className="white" to="/about">About</Link> 
        </nav>
    );
}

export default Navbar;