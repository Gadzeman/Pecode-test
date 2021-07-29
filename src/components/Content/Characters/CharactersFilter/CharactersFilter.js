import React from 'react';
import "./CharactersFilter.css"

const CharactersFilter = ({setFilteredCharacters, characters}) => {
    const filterAll = () => {
        setFilteredCharacters(characters)
    }
    const filterStatusAlive = () => {
        const filtered = characters.filter(el => el.status === "Alive")
        setFilteredCharacters(filtered)
    }
    const filterStatusDead = () => {
        const filtered = characters.filter(el => el.status === "Dead")
        setFilteredCharacters(filtered)
    }
    const filterStatusUnknown = () => {
        const filtered = characters.filter(el => el.status === "unknown")
        setFilteredCharacters(filtered)
    }
    const filterGenderMale = () => {
        const filtered = characters.filter(el => el.gender === "Male")
        setFilteredCharacters(filtered)
    }
    const filterGenderFemale = () => {
        const filtered = characters.filter(el => el.gender === "Female")
        setFilteredCharacters(filtered)
    }
    const filterGenderUnknown = () => {
        const filtered = characters.filter(el => el.gender === "unknown")
        setFilteredCharacters(filtered)
    }
    return (
        <div className={"characters__filter"}>
            <ul className={"filter"}>
                <li>
                    <p>Status</p>
                    <ul className={"filter__menu"}>
                        <li onClick={filterAll}>All</li>
                        <li onClick={filterStatusAlive}>Alive</li>
                        <li onClick={filterStatusDead}>Dead</li>
                        <li onClick={filterStatusUnknown}>Unknown</li>
                    </ul>
                </li>
            </ul>
            <ul className={"filter"}>
                <li>
                    <p>Gender</p>
                    <ul className={"filter__menu"}>
                        <li onClick={filterAll}>All</li>
                        <li onClick={filterGenderMale}>Male</li>
                        <li onClick={filterGenderFemale}>Female</li>
                        <li onClick={filterGenderUnknown}>Unknown</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default CharactersFilter;