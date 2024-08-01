import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchCity from '../components/SearchCity'; // getting value for city from search function 
import './holiday.css';

function Attractions({ city, setCity }) {

    //input search function from SearchCity and API search and results

    return(
        // top half stays the same as home
        // error and response displays
          <div>
          <h1>Your perfect trip starts here</h1>

          <br></br>
          <Link className={'response greenbg'} to="/accomodation">Accomodation</Link> &nbsp;
          <Link className={'response greenbg'} to="/attractions">Attractions</Link> &nbsp;
          <Link className={'response greenbg' } to="/events">Events</Link>
          <h1>Attractions</h1>
          
          </div>
  );
}

export default Attractions;