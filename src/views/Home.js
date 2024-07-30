import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Home({ city, setCity }) {

    return(
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity city={city} setCity={setCity} />
        <br></br>
        <Link to="/accomodation">Accomodation</Link> |&nbsp;
        <Link to="/attractions">Attractions</Link> |&nbsp;
        <Link to="/events">Events</Link>
        </div>
    );
}

export default Home;