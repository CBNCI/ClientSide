import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity'; // getting value for city from search function 

function Events({ city, setCity }) {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [submittedCity, setSubmittedCity] = useState('');

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
                city, // Passing the city name to the API
                countryCode: 'US' // restricted to the us 
              }
          });
          if (response.data._embedded && response.data._embedded.events.length > 0) {
            // feeding back name
            setName(response.data._embedded.events[0].name);
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