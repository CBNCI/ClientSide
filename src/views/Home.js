import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchCity from '../components/SearchCity';


function Home({ city, setCity }) {

    const navigate = useNavigate();

    const handleCitySubmit = (submittedCity) => {
        setCity(submittedCity); // Update city with the searched city
        navigate(`/events?city=${encodeURIComponent(submittedCity)}`); // Redirect to events page with city query parameter
      };

    return(
    <div>
        <div>
            <h1>Discover the US</h1>
            <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
            <br></br>
            <Link className={'response greenbg'} to="/accomodation">Accomodation</Link> &nbsp;
            <Link className={'response greenbg'} to="/attractions">Attractions</Link> &nbsp;
            <Link className={'response greenbg' } to="/events">Events</Link>
        </div>
        <br></br>
        <div className={'response'}>
            <div col-3>
            <h2>Popular Destinations</h2>
            <img src= '/ny.jpg'></img>
            <p>New York <button className={'greenbg'}>Visit</button> </p>
            </div>
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