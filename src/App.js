/*
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './views/Contact';
import Home from './views/Home';
import About from './views/About';
import Events from './views/Events';
import Accomodation from './views/Accomodation';
import Attractions from './views/Attractions';
import { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState(''); // Global city state

  return (
    <Router>
      <div >
      <Navbar />
        <Routes>
        <Route path='/' element={<Home city={city} setCity={setCity} />} />
        <Route path='/contact' element={<Contact city={city} />} />
        <Route path='/about' element={<About city={city} />} />
        <Route path='/events' element={<Events city={city} setCity={setCity} />} />
        <Route path='/accomodation' element={<Accomodation city={city} />} />
        <Route path='/attractions' element={<Attractions city={city} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Contact from "./views/Contact";
import Home from "./views/Home";
import About from "./views/About";
import Events from "./views/Events";
import Accomodation from "./views/Accomodation";
import Attractions from "./views/Attractions";
import AttractionDetail from "./views/AttractionDetail"; // Import the new component
import { useState } from "react";

function App() {
    const [city, setCity] = useState(""); // Global city state

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home city={city} setCity={setCity} />} />
                    <Route path="/contact" element={<Contact city={city} />} />
                    <Route path="/about" element={<About city={city} />} />
                    <Route path="/events" element={<Events city={city} setCity={setCity} />} />
                    <Route path="/accomodation" element={<Accomodation city={city} />} />
                    <Route path="/attractions" element={<Attractions city={city} setCity={setCity} />} />
                    <Route path="/attraction/:xid" element={<AttractionDetail />} /> {/* Add this route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
