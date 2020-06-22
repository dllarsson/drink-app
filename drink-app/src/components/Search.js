import React, { useState } from 'react';
import DrinksData from '../data/drinks.json';
import ResultItem from './ResultItem';
import '../styles/Search.css';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [resultItems, setResultItems] = useState();

    const handleChange = (e) => {
        setSearchInput(e.target.value);
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
        <div>
            <div id="search">
                <input onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </div>
            <div className="results">
                {resultItems && resultItems.length === 0 ? <p>No drink with that name was found...</p> : resultItems}   
            </div>
        </div>
    )
}

export default Search;