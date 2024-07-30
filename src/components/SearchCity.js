import { useState} from 'react';

function SearchCity ({ city, setCity }) {

    const handleCityInput = (e) => { // get city from user
        setCity(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
  }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={city} 
              onChange={handleCityInput} 
              placeholder="Where would you like to go?" 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    

}

export default SearchCity;