import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // allow navigation from other page and carry over the search value
import SearchCity from '../components/SearchCity'; // getting value for city from search function 
import './holiday.css';

function Events({ city, setCity }) {
    const [error, setError] = useState('');
    const [events, setEvents] = useState([]);
    const [classification, setClassification] = useState('');
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

       // Handle category selection
      const handleCategoryClick = (category) => {
      setClassification(category); // Update classification state
      navigate(`/events?city=${city}&classification=${category}`); // Update URL with category
      };

      useEffect(() => {
        const cityFromQuery = getQueryParams();
        const classificationFromQuery = new URLSearchParams(location.search).get('classification');
        if (cityFromQuery) {
          setCity(cityFromQuery);
          setClassification(classificationFromQuery || ''); // Set classification from URL or default
          searchEvent(cityFromQuery, classificationFromQuery);
        }
      }, [location.search]); 

      // error handling
        async function searchEvent(cityToSearch, classificationToSearch) {
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
                countryCode: 'US', // restricted to the us 
                classificationName: classificationToSearch
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


    return (
    <div className="container">
      <h1 className="my-5 display-3 fw-bolder">Your perfect trip starts here</h1>
      <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
      <br />
      <div className="d-flex justify-content-center my-2">
        <Link className="btn greenbg mb-3" to="/accommodation">Accommodation</Link> &nbsp;
        <Link className="btn greenbg mx-4 mb-3" to="/attractions">Attractions</Link> &nbsp;
        <Link className="btn greenbg mb-3" to="/events">Events</Link>
      </div>

      <h2 className="my-4">Events</h2>
      <div className="d-flex justify-content-left my-2">
        <button onClick={() => handleCategoryClick('Sports')} className="mx-2 px-4">Sports</button>
        <button onClick={() => handleCategoryClick('Music')} className="mx-2 px-4">Music</button>
        <button onClick={() => handleCategoryClick('Theatre')} className="mx-2 px-4">Theatre</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="events-grid">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="event-item d-flex align-items-start mb-4 p-3 border rounded shadow-sm">
              {event.images && event.images[0] && (
                <img src={event.images[0].url} alt={event.name} className="img-fluid me-3" style={{ maxWidth: '200px', borderRadius: '8px' }} />
              )}
              <div className="content flex-grow-1">
                <h2 className="h4 fw-bold">{event.name}</h2>
                <p>{new Date(event.dates.start.dateTime).toLocaleDateString()}</p>
                <p>{event._embedded?.venues?.[0]?.name}</p>
              </div>
              <div className="more-details align-self-end">
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="btn greenbg">Book Now</a>
              </div>
            </div>
          ))
        ) : (
          !error && <p>No events found</p>
        )}
      </div>
    </div>
  );
}


export default Events;

