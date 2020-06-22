import React from 'react';

const ResultItem = props => {
    return(
        <div className="result-item">
            <p>Name: {props.name}</p>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default ResultItem;