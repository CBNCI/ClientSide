import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Home() {

    return(
        <div>
        <h1>Your perfect trip starts here</h1>
        < SearchCity />
        <br></br>
        <Link to="/accomodation">Accomodation</Link> |&nbsp;
        <Link to="/attractions">Attractions</Link> |&nbsp;
        <Link to="/events">Events</Link>
        </div>
    );
}

export default Home;