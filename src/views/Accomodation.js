import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../components/SearchCity';

function Accomodation({ city, setCity }) {

    return(
        // top half stays the same as home
        // error and response displays
          <div>
          <h1>Your perfect trip starts here</h1>

          <br></br>
          <Link className={'response greenbg'} to="/accomodation">Accomodation</Link> &nbsp;
          <Link className={'response greenbg'} to="/attractions">Attractions</Link> &nbsp;
          <Link className={'response greenbg' } to="/events">Events</Link>
          <h1>Accomodation</h1>
          
          </div>
  );
}

export default Accomodation;