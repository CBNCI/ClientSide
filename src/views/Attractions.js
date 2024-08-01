import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Attractions({ city, setCity }) {

    return(
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity city={city} setCity={setCity}/>
        <br></br>
        <Link className={'response greenbg'} to="/accomodation">Accomodation</Link> &nbsp;
            <Link className={'response greenbg'} to="/attractions">Attractions</Link> &nbsp;
            <Link className={'response greenbg' } to="/events">Events</Link>
        <h1>Attractions</h1>
        </div>
);
}

export default Attractions;