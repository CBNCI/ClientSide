import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';
import './holiday.css';
import Footer from "../components/Footer";

const accommodations = [
  {
    id: 1,
    title: 'New York',
    description: 'Description for accommodation in New York. A brief overview of the amenities and services provided.',
    price: '$100/night',
    imageUrl: '/ny.jpg'
  },
  {
    id: 2,
    title: 'Los Angeles',
    description: 'Description for accommodation in Los Angeles. A brief overview of the amenities and services provided.',
    price: '$120/night',
    imageUrl: '/chi.jpeg'
  },
  {
    id: 3,
    title: 'Chicago',
    description: 'Description for accommodation in Chicago. A brief overview of the amenities and services provided.',
    price: '$150/night',
    imageUrl: '/nyc.jpg'
  }
];

function Accommodation({ city, handleCitySubmit }) {
  const handleCityButtonClick = (cityName) => {
    handleCitySubmit(cityName);
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
          
          <header className="my-4">
            <h1 className="text-center">Accommodation Options</h1>
          </header>

          <div className="row row-cols-md-3 g-4">
            {accommodations.map(accommodation => (
              <div className="col" key={accommodation.id}>
                <div>
                  <img src={accommodation.imageUrl} className="card-img-top rounded" alt={accommodation.title} />
                  <div className="card-body">
                    <div className="row row-cols-md-2">
                      <div className="col-md-8">
                        <h5 className="pt-2">{accommodation.title}</h5>
                      </div>
                    </div>
                    <p className="card-text mt-3">{accommodation.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{accommodation.price}</small>
                        <button className="btn greenbg px-4 mt-2 py-1" onClick={() => handleCityButtonClick(accommodation.title)}>Visit</button>
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

export default Accommodation;
