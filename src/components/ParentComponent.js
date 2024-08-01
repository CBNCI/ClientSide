import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Events';
import Accommodation from './Accommodation';
import Attractions from './Attractions';
import './holiday.css';

function ParentComponent() {
  const [city, setCity] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/events" 
            element={<Events city={city} setCity={setCity} />} 
          />
          <Route 
            path="/accommodation" 
            element={<Accommodation city={city} setCity={setCity} />} 
          />
          <Route 
            path="/attractions" 
            element={<Attractions city={city} setCity={setCity} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default ParentComponent;
