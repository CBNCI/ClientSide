import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Accomodation() {
    return(
            <div>
            <h1>Your perfect trip starts here</h1>
            < SearchCity />
            <br></br>
            <Link to="/accomodation">Accomodation</Link> |&nbsp;
            <Link to="/attractions">Attractions</Link> |&nbsp;
            <Link to="/events">Events</Link>
            <h1>Accomodation</h1>
            </div>
    );
}

export default Accomodation;