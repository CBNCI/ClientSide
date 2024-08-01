import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchCity from '../components/SearchCity';
import './holiday.css';

function Accommodation({ city, setCity }) {
  const [error, setError] = useState('');
  const [events, setEvents] = useState('');
  //declare cont for accom
  const location = useLocation();
  const navigate = useNavigate();

  const handleCitySubmit = (submittedCity) => {
    setCity(submittedCity);
    navigate(`/accommodation?city=${submittedCity}`);
  };

  // below is the code used to get a response from the ticketmaster API
  // replace with another API to get your data
  /* useEffect(() => {
    if (city) {
      searchEvent(city);
    }
  }, [city]);

   async function searchEvent(cityToSearch) {
    setError('');
    if (!cityToSearch) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
        params: {
          apikey: '2gfUGkqfbk07TW7g5XNYP8tmcHAV9OP7',
          city: cityToSearch,
          countryCode: 'US'
        }
      });
      if (response.data._embedded && response.data._embedded.events.length > 0) {
        setEvents(response.data._embedded.events.slice(0, 4));
      } else {
        setError(`Events in ${cityToSearch} could not be found, make sure you entered a valid town`);
      }
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`Events in ${cityToSearch} could not be found, make sure you entered a valid town`);
      } else {
        setError("Error, please make sure you are connected to the internet and try again");
      }
    }
  } */

  //input returned data from api
  return (
    <div>
      <h1>Your perfect trip starts here</h1>
      <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
      <br />
      <Link className="response greenbg" to="/accommodation">Accommodation</Link> &nbsp;
      <Link className="response greenbg" to="/attractions">Attractions</Link> &nbsp;
      <Link className="response greenbg" to="/events">Events</Link>
      <h1>Accommodation</h1>
    </div>
  );
}

export default Accommodation;
