/*
import { useState} from 'react';
import '../views/holiday.css';

function SearchCity ({ city, handleCitySubmit }) {

    const [inputValue, setInputValue] = useState(city);

    const handleCityInput = (e) => { // get city from user
        setInputValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        handleCitySubmit(inputValue);
  }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={inputValue} 
              onChange={handleCityInput} 
              placeholder="Where would you like to go?" 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    

}

export default SearchCity;
*/

import { useState } from 'react';
import '../views/holiday.css';

function SearchCity({ city, handleCitySubmit }) {
  const [inputValue, setInputValue] = useState(city);

  const handleCityInput = (e) => {
    setInputValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleCitySubmit(inputValue);
  }

  return (
    /*<div className="">
      <form onSubmit={handleSubmit}>
        <input className="w-50 px-5 py-2" 
          type="text" 
          value={inputValue} 
          onChange={handleCityInput} 
          placeholder="Where would you like to go?" 
        />
        <button className="px-5 py-2" type="submit">Submit</button>
      </form>
    </div>*/
      
      <div className="d-flex justify-content-center my-4">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center w-75">
        <input
          className="me-2 flex-grow-1 px-5 py-2"
          type="text"
          value={inputValue}
          onChange={handleCityInput}
          placeholder="Where would you like to go?"
        />
        <button className="px-5 py-2" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchCity;
