import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './holiday.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function AttractionDetail() {
  const { xid } = useParams();
  const [attraction, setAttraction] = useState(null);
  const [error, setError] = useState('');
  const mapRef = useRef(null);

  useEffect(() => {
    async function fetchAttractionDetails() {
      setError('');
      try {
        const detailsResponse = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}`, {
          params: {
            apikey: '5ae2e3f221c38a28845f05b65d8e7a9cf1df63a086e80f2cdc5a8c09' // Replace with your OpenTripMap API key
          }
        });
        setAttraction(detailsResponse.data);
      } catch (error) {
        setError('Could not fetch attraction details, please try again later.');
      }
    }

    fetchAttractionDetails();
  }, [xid]);

  useEffect(() => {
    if (attraction && attraction.point && !mapRef.current) {
      mapRef.current = L.map('map').setView([attraction.point.lat, attraction.point.lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
      L.marker([attraction.point.lat, attraction.point.lon]).addTo(mapRef.current)
        .bindPopup(attraction.name)
        .openPopup();
    }
  }, [attraction]);

  const formatAddress = (address) => {
    const { road, town, state, country } = address;
    return `${road ? road + ', ' : ''}${town ? town + ', ' : ''}${state ? state + ', ' : ''}${country || ''}`;
  };

  return (
    <div className="container my-5">
      {error && <p className="text-danger">{error}</p>}
      {attraction ? (
        <div className="attraction-detail">
          <h1 className="display-4">{attraction.name}</h1>
          <div className="gallery d-flex flex-wrap gap-3 my-4">
            {attraction.preview && attraction.preview.source && (
              <img className="img-thumbnail" src={attraction.preview.source} alt={attraction.name} />
            )}
            {attraction.images && attraction.images.map((image, index) => (
              <img key={index} className="img-thumbnail" src={image.source} alt={`${attraction.name} ${index + 1}`} />
            ))}
          </div>
          {attraction.wikipedia_extracts && (
            <p className="lead">{attraction.wikipedia_extracts.text}</p>
          )}
          <div className="d-flex flex-column mb-3">
            {attraction.address && <p><strong>Address:</strong> {formatAddress(attraction.address)}</p>}
            {attraction.hours && attraction.hours.weekday_text && (
              <p><strong>Opening Hours:</strong> {attraction.hours.weekday_text.join(', ')}</p>
            )}
            {attraction.phone && <p><strong>Phone:</strong> {attraction.phone}</p>}
            {attraction.url && <p><strong>Website:</strong> <a href={attraction.url} target="_blank" rel="noopener noreferrer">{attraction.url}</a></p>}
          </div>
          <div id="map" style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>
          <button className="greenbg btn-primary px-5 mt-4" onClick={() => window.history.back()}>Go Back</button>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default AttractionDetail;
