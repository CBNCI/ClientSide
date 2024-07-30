import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Events() {
    const [city, setCity] = useState(''); 
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    async function searchEvent() {
        setError('');

        if (!city) {
          setError("Please enter a city name");
          return; 
        } 
    
        try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
            params: {
                apikey: '2gfUGkqfbk07TW7g5XNYP8tmcHAV9OP7',
                city, // Passing the city name to the API
                countryCode: 'US'
              }
          });
          if (response.data._embedded && response.data._embedded.events.length > 0) {
            setName(response.data._embedded.events[0].name);
          } 
          else {
            setError(`Events in ${city} could not be found, make sure you entered a valid town`);
          }
        }
        catch (e)  {
            if (e.response && e.response.status === 404) {
                setError(`Events in ${city} could not be found, make sure you entered a valid town`);
            } 
            else {
                setError("Error, please make sure you are connected to the internet and try again");
            }
        }     
    }

    function handleCitySubmit(submittedCity) {
        setCity(submittedCity); // Update city state with the submitted city
      }

    useEffect(() => {
        if (city) {
          searchEvent();
        }
      }, [city]);

    return(
        <div>
        <h1>Your perfect trip starts here</h1>
        <SearchCity onCitySubmit={handleCitySubmit} />
        <br></br>
        <Link to="/accomodation">Accomodation</Link> |&nbsp;
        <Link to="/attractions">Attractions</Link> |&nbsp;
        <Link to="/events">Events</Link>
        <h1>Events</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {name && <p>Event: {name}</p>}
        </div>
);
}

export default Events;