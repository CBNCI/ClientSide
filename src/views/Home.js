import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchCity from '../components/SearchCity';
import Footer from "../components/Footer";
import '../App.css';
import '../views/holiday.css';

function Home({ city, setCity }) {
  const [popularAttractions, setPopularAttractions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPopularAttractions();
  }, []);

  const fetchPopularAttractions = async () => {
    try {
      const attractionsResponse = await axios.get('https://api.opentripmap.com/0.1/en/places/radius', {
        params: {
          radius: 100000, // radius in meters
          lon: -98.5795, // Center of the US
          lat: 39.8283, // Center of the US
          kinds: 'interesting_places',
          rate: 3,
          format: 'json',
          apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09'
        }
      });

      const randomAttractions = attractionsResponse.data.sort(() => 0.5 - Math.random()).slice(0, 4);

      const detailedAttractions = await Promise.all(
        randomAttractions.map(async (attraction) => {
          const detailsResponse = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.xid}`, {
            params: {
              apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09'
            }
          });
          return { ...attraction, details: detailsResponse.data };
        })
      );

      setPopularAttractions(detailedAttractions);
    } catch (error) {
      console.error('Error fetching popular attractions:', error);
    }
  };

  const handleCitySubmit = (submittedCity) => {
    setCity(submittedCity);
    navigate(`/events?city=${encodeURIComponent(submittedCity)}`);
  };

  const handleCityButtonClick = (cityName) => {
    handleCitySubmit(cityName);
  };

  const handleAttractionButtonClick = (attractionXid) => {
    navigate(`/attraction/${attractionXid}`);
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="container cards">
          <h1 className="my-5 display-3 fw-bolder">Discover the US</h1>
          <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
          <br />
          <div className="d-flex justify-content-center my-2">
            <Link className="btn greenbg mb-3" to="/accommodation">Accommodation</Link> &nbsp;
            <Link className="btn greenbg mx-4 mb-3" to="/attractions">Attractions</Link> &nbsp;
            <Link className="btn greenbg mb-3" to="/events">Events</Link>
          </div>
          <h2 className="mt-5 mb-4 fw-bold">Popular Destinations</h2>
          <div className="row row-cols-md-4 g-4">
            <div className="col">
              <div>
                <img src="/ny.jpg" className="card-img-top rounded" alt="" />
                <div className="row row-cols-md-2">
                  <div className="col-md-8">
                    <h5 className="pt-2">New York</h5>
                  </div>
                  <div className="col-md-4">
                    <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleCityButtonClick('New York')}>Visit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/chi.jpeg" className="card-img-top rounded" alt="" />
                <div className="row row-cols-md-2">
                  <div className="col-md-8">
                    <h5 className="pt-2">Chicago</h5>
                  </div>
                  <div className="col-md-4">
                    <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleCityButtonClick('Chicago')}>Visit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/sanfran.webp" className="card-img-top rounded" alt="" />
                <div className="row row-cols-md-2">
                  <div className="col-md-8">
                    <h5 className="pt-2">San Francisco</h5>
                  </div>
                  <div className="col-md-4">
                    <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleCityButtonClick('San Francisco')}>Visit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <img src="/dallas.webp" className="card-img-top rounded" alt="" />
                <div className="row row-cols-md-2">
                  <div className="col-md-8">
                    <h5 className="pt-2">Dallas</h5>
                  </div>
                  <div className="col-md-4">
                    <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleCityButtonClick('Dallas')}>Visit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-5 mb-4 pt-5 text-end fw-bold">Popular Attractions</h2>
          <div className="row row-cols-md-4 g-4">
            {popularAttractions.map((attraction, index) => (
              <div key={index} className="col">
                <div>
                  <img src={attraction.details.preview?.source || '/placeholder.jpg'} className="card-img-top rounded" alt={attraction.name} />
                  <div className="row row-cols-md-2">
                    <div className="col-md-8">
                      <h5 className="pt-2">{attraction.name}</h5>
                    </div>
                    <div className="col-md-4">
                      <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleAttractionButtonClick(attraction.xid)}>Visit</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 
      </div>
      <Footer />
    </div>
  );
}

export default Home;
