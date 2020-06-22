import React, { useState, useEffect } from 'react';
import DrinksData from '../data/drinks.json';
import ResultItem from './ResultItem';
import '../styles/Search.css';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [resultItems, setResultItems] = useState();

    const handleChange = (e) => {
        const searchString = e.target.value.toLowerCase();
        setSearchInput(searchString);
        console.log(searchInput);
    }
    useEffect(() => {

        if (searchInput !== ""){
            const result = DrinksData.cocktails.filter((item) => {
                item.name = item.name.toLowerCase();
                return item.name.includes(searchInput);
            });
    
            setResultItems(result.map(item => <ResultItem 
                                                        src={item.image} 
                                                        name={item.name} 
                                                        key={item.name}
                                                    />));
        }
    }, [searchInput])

    /* Jag har kommenterat ut koden här för att man skulle använda sig av useEffect så jag 
       valde att använda den med att söka varje gång man gör ändring i sökfältet istället för knapptryck. 
       Sämre prestanda på appen men funkar bra på denna lilla app.
       Men knappfunktionen funkar bra om man vill använda den också.
    */

    // const handleClick = (e) => {
    //     const result = DrinksData.cocktails.filter((item) => {
    //         item.name = item.name.toLowerCase();
    //         return item.name.includes(searchInput);
    //     });

    //     setResultItems(result.map(item => <ResultItem 
    //                                                 src={item.image} 
    //                                                 name={item.name} 
    //                                                 key={item.name}
    //                                             />));
    // }

    return (
        <div>
            <div id="search">
                <input onChange={handleChange} />
                {/* <button onClick={handleClick}>Search</button> */}
            </div>
            <div className="results">
                {resultItems && resultItems.length === 0 ? <p>No drink with that name was found...</p> : resultItems}   
            </div>
        </div>
    )
}

export default Search;