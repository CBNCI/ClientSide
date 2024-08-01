import React from 'react';
import { Link } from 'react-router-dom';
import '../views/holiday.css';

function Navbar() {

    return(
        <nav>
            <Link to="/">Home</Link> |&nbsp;
            <Link to="/contact">Contact</Link> |&nbsp;
            <Link to="/reviews">Reviews</Link> 
        </nav>
    );
}

export default Navbar;