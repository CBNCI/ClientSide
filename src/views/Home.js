import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Home({ city, setCity }) {

    return(
    <div>
        <div>
            <h1>Discover the US</h1>
            <SearchCity city={city} setCity={setCity} />
            <br></br>
            <Link to="/accomodation">Accomodation</Link> |&nbsp;
            <Link to="/attractions">Attractions</Link> |&nbsp;
            <Link to="/events">Events</Link>
        </div>
        <br></br>
        <div className={'response'}>
            <h2>Popular Destinations</h2>
            <img src= '/ny.jpg'></img>
            <p>New York <button className={'greenbg'}>Visit</button> </p>
            <img src= '/chi.jpeg'></img>
            <p>Chicago <button className={'greenbg'}>Visit</button> </p>
            <img src= '/sanfran.webp'></img>
            <p>San Fransisco <button className={'greenbg'}>Visit</button> </p>
            <img src= '/dallas.webp'></img>
            <p>Dallas <button className={'greenbg'}>Visit</button> </p>
        </div>
    </div>
    );
}

export default Home;