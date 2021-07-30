import React from 'react';
import "./Location.css"

const Location = ({location}) => {
    return (
        <div className={"location"}>
            <b>{location.name}</b>
            <p>Dimension: {location.dimension}</p>
            <p>Residents: {location.residents.length}</p>
        </div>
    );
};

export default Location;