import { useState} from 'react';

function SearchCity ({ onCitySubmit }) {
    const[city, setCity] = useState("");

    function handleCityInput(e){
        e.preventDefault();
        setCity(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
    if (city) {
      onCitySubmit(city); // Pass the city to the parent component
    }
    else {
        console.error('onCitySubmit is not a function');
      }
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