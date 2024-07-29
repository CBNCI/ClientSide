import { useState} from 'react';
import axios from 'axios';
import { Navigate, Route, Routes} from 'react-router-dom';

function SearchCity (props) {
    const[city, setCity] = useState("");

    function handleCityInput(e){
        e.preventDefault();
        setCity(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            localStorage.setItem("");
        }
        catch (error) {
            console.error('Error submitting city:', error);
        }
    }

    return (
        <div>
          <h2>Enter City</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={city} 
              onChange={handleCityInput} 
              placeholder="Enter city name" 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    

}

export default SearchCity;