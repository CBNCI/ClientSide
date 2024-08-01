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