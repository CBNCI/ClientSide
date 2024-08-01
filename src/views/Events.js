import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // allow navigation from other page and carry over the search value
import SearchCity from '../components/SearchCity'; // getting value for city from search function 
import './holiday.css';

function Events({ city, setCity }) {
    const [error, setError] = useState('');
    const [events, setEvents] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    // get value from previous pages' search
    const getQueryParams = () => {
      const query = new URLSearchParams(location.search);
      return query.get('city');
    };

      // allow submitting a new city search
      const handleCitySubmit = (submittedCity) => {
        setCity(submittedCity); // Update city state
        navigate(`/events?city=${submittedCity}`); // Update URL with new query parameter
      };

      useEffect(() => {
        const cityFromQuery = getQueryParams();
        if (cityFromQuery) {
          searchEvent(cityFromQuery);
        }
      }, [location.search]); 


    async function searchEvent(cityToSearch) {
        setError('');
        if (!cityToSearch) {
          setError("Please enter a city name");
          return; 
        } 
    
        try {
        // API from ticket master
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
            params: {
                apikey: '2gfUGkqfbk07TW7g5XNYP8tmcHAV9OP7',
                city: cityToSearch, // Passing the city name to the API
                countryCode: 'US' // restricted to the us 
              }
          });
          if (response.data._embedded && response.data._embedded.events.length > 0) {
            // feeding back name
            setEvents(response.data._embedded.events.slice(0, 4));
          } 
          else {
            // error response
            setError(`Events in ${cityToSearch} could not be found, make sure you entered a valid town`);
          }
        }
        catch (e)  {
            if (e.response && e.response.status === 404) {
              // error response
                setError(`Events in ${cityToSearch} could not be found, make sure you entered a valid town`);
            } 
            else {
              // error response
                setError("Error, please make sure you are connected to the internet and try again");
            }
        }     
    }


    return(
      // top half stays the same as home
      // error and response displays
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
        <br></br>
        <Link className={'response greenbg'} to="/accomodation">Accomodation</Link> &nbsp;
        <Link className={'response greenbg'} to="/attractions">Attractions</Link> &nbsp;
        <Link className={'response greenbg' } to="/events">Events</Link>
        <h1>Events</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className={'response'} >
              {event.images && event.images[0] && (
              <img src={event.images[0].url} alt={event.name} />)}
              <h2 >{event.name}</h2>
              <p >{new Date(event.dates.start.dateTime).toLocaleDateString()}</p>
              <p >{event._embedded?.venues?.[0]?.name}</p>
              <a href={event.url} target="_blank" rel="noopener noreferrer">
              <button className="greenbg" >Book Now</button>
              </a>
            </div>
                    ))
          ) : 
          (!error && <p>No events found</p>)
        }
        </div>
);
}

export default Events;