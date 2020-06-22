import React, { useState } from 'react';
import DrinksData from '../data/drinks.json';
import ResultItem from './ResultItem';
import '../styles/Search.css';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [resultItems, setResultItems] = useState();

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    const handleClick = (e) => {
        const result = DrinksData.cocktails.filter((item) => item.name.includes(searchInput));

        setResultItems(result.map(item => <ResultItem 
                                                    src={item.image} 
                                                    name={item.name} 
                                                    key={item.name}
                                                />));
        console.log(result);

    }

    return (
        <div className="search">
            <input onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            <div className="results">
                {resultItems}   
            </div>
        </div>
    )
}

export default Search;