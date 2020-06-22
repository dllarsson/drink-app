import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const ResultItem = props => {
    const [isClicked, setIsClicked] = useState(false);

    if (isClicked){
        const pathName = `/drink#${props.name}`
        return <Redirect push to={pathName} />
    } else {
        return(
            <div className="result-item">
                <p>Name: {props.name}</p>
                <img 
                    src={props.src} 
                    alt={props.alt}
                    onClick={() => setIsClicked(prevState => !prevState)}
                 />
                
                
            </div>
        )
    }
}

export default ResultItem;