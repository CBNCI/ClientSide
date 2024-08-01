import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity'; // getting value for city from search function 
import './holiday.css';

function Events({ city, setCity }) {
    const [error, setError] = useState('');
    const [events, setEvents] = useState([]);
    const [submittedCity, setSubmittedCity] = useState('');

    async function searchEvent(cityToSearch) {
        setError('');
        setEvents([]);

        if (!cityToSearch) {
          setError("Please enter a city name");
          return; 
        } 
    
        try {
        // API from ticket master
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
            params: {
                apikey: '2gfUGkqfbk07TW7g5XNYP8tmcHAV9OP7',
                city, // Passing the city name to the API
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

    function handleCitySubmit(submittedCity) {
        setCity(submittedCity); 
        setSubmittedCity(submittedCity);// Update city with the submitted city
      }

    useEffect(() => {
      // running search event function
        if (submittedCity) {
          searchEvent(submittedCity);
        }
      }, [submittedCity]);

    return(
      // top half stays the same as home
      // error and response displays
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity city={city} handleCitySubmit={handleCitySubmit}  />
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
            </div>
                    ))
          ) : 
          (!error && <p>No events found</p>)
        }
        </div>
);
}

export default Events;