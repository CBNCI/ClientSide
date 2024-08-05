import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchCity from '../components/SearchCity';
import 'bootstrap/dist/css/bootstrap.min.css';
import './holiday.css';
import Footer from "../components/Footer";

function Attractions({ city, setCity }) {
  const [error, setError] = useState('');
  const [attractions, setAttractions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const itemsPerPage = 6; // Limit of 6 items per page
  const maxPageButtons = 3; // Number of page buttons to display at a time

  const handleCitySubmit = (submittedCity) => {
    setCity(submittedCity);
    setCurrentPage(1);
    navigate(`/attractions?city=${encodeURIComponent(submittedCity)}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page')) || 1;
    setCurrentPage(page);

    if (city) {
      fetchAttractions(city, page);
    }
  }, [city, location.search]);

  async function fetchAttractions(cityName, page) {
    setError('');
    try {
      // Get city coordinates from OpenTripMap API
      const geoResponse = await axios.get('https://api.opentripmap.com/0.1/en/places/geoname', {
        params: {
          name: cityName,
          apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09'
        }
      });

      const { lon, lat } = geoResponse.data;
      // Fetch attractions using the coordinates
      const attractionsResponse = await axios.get('https://api.opentripmap.com/0.1/en/places/radius', {
        params: {
          radius: 5000, // radius in meters
          lon,
          lat,
          kinds: 'interesting_places', // specify the kind of places
          rate: 3,
          format: 'json',
          apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09'
        }
      });

      const startIndex = (page - 1) * itemsPerPage;
      const paginatedAttractions = attractionsResponse.data.slice(startIndex, startIndex + itemsPerPage);
      setTotalPages(Math.ceil(attractionsResponse.data.length / itemsPerPage));

      const detailedAttractions = await Promise.all(
        paginatedAttractions.map(async (attraction) => {
          const detailsResponse = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.xid}`, {
            params: {
              apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09'
            }
          });
          await new Promise(resolve => setTimeout(resolve, 200)); // Delay to handle rate limiting
          return { ...attraction, details: detailsResponse.data };
        })
      );

      setAttractions(detailedAttractions);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError('Too many requests: Please try again later.');
      } else {
        setError('Could not fetch attractions, please try again later.');
      }
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/attractions?city=${encodeURIComponent(city)}&page=${page}`);
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (currentPage > 1) {
      pages.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className="btn btn-link"
        >
          First
        </button>
      );
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`btn btn-link ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="btn btn-link"
        >
          Last
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="container">
          <h1 className="my-5 display-3 fw-bolder">Your perfect trip starts here</h1>
          <SearchCity city={city} handleCitySubmit={handleCitySubmit} />
          <br />
          <div className="d-flex justify-content-center my-2">
            <Link className="greenbg btn mb-3" to="/accommodation">Accommodation</Link> &nbsp;
            <Link className="greenbg btn mx-4 mb-3" to="/attractions">Attractions</Link> &nbsp;
            <Link className="greenbg btn mb-3" to="/events">Events</Link>
          </div>
          <h2 className="my-4">Attractions</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="attractions-grid">
            {attractions.length > 0 ? (
              attractions.map((attraction, index) => (
                <div key={index} className="response attraction-item d-flex align-items-start mb-4 p-3 border rounded shadow-sm">
                  <img src={attraction.details.preview?.source || 'placeholder.jpg'} alt={attraction.name} className="img-fluid me-3" style={{maxWidth: '200px', borderRadius: '8px'}} />
                  <div className="content flex-grow-1">
                    <h2 className="h4 fw-bold">{attraction.name}</h2>
                    {attraction.details.wikipedia_extracts && (
                      <p className="w-75">{attraction.details.wikipedia_extracts.text.substring(0, 100)}...</p>
                    )}
                  </div>
                  <div className="more-details align-self-end">
                    <Link to={`/attraction/${attraction.xid}`} className="btn btn-primary">More details</Link>
                  </div>
                </div>
              ))
            ) : (
              !error && <p>No attractions found</p>
            )}
          </div>
          <div className="pagination d-flex justify-content-center my-4">
            {renderPagination()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Attractions;
