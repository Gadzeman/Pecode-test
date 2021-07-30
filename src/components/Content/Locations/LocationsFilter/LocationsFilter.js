import React from 'react';
import "./LocationsFilter.css"

const LocationsFilter = ({locations, setFilteredLocations}) => {
    const locationsType = Array.from(new Set(locations.map(el => el.type)))
    const filterAll = () => {
        setFilteredLocations(locations)
    }
    const filterName = (name) => {
        const filteredLocations = locations.filter(el => el.type === name)
        setFilteredLocations(filteredLocations)
    }
    return (
        <div className={"characters__filter"}>
            <ul className={"filter"}>
                <li>
                    <p>Type</p>
                    <ul className={"filter__menu"}>
                        <li onClick={filterAll}>All</li>
                        {locationsType.map(el => <li onClick={() => filterName(el)} key={el}>{el}</li>)}
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default LocationsFilter;