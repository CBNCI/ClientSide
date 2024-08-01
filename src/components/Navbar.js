import React from 'react';
import { Link } from 'react-router-dom';
import '../views/holiday.css';

function Navbar() {

    return(
        <nav>
            <img src='/logowhite.png' style={{width: '20px' }}></img> &nbsp;
            <Link className={"white"} to="/">RPC US Travel</Link> &nbsp;
            <Link className={"white"} to="/contact">Contact</Link> &nbsp;
            <Link className={"white"} to="/reviews">Reviews</Link> 
        </nav>
    );
}

export default Navbar;