import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Attractions() {

    return(
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity  />
        <br></br>
        <Link to="/accomodation">Accomodation</Link> |&nbsp;
        <Link to="/attractions">Attractions</Link> |&nbsp;
        <Link to="/events">Events</Link>
        <h1>Attractions</h1>
        </div>
);
}

export default Attractions;