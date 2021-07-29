import React, {useState, useEffect} from 'react';
import "./Characters.css"
import CharacterDetails from "../CharacterDetails/CharacterDetails";

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character?page="
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const [info, setInfo] = useState([])
    const pageLocalStorage = localStorage.getItem("page")
    const [page, setPage] = useState(pageLocalStorage ? JSON.parse(pageLocalStorage) : 1)
    //==========================for modal window============================//
    const [character, setCharacter] = useState({})
    const [active, setActive] = useState(false)
    const toModal = (el) => {
        setCharacter(el)
        setActive(true)
    }
    //==========================filter functions============================//
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
    //======================================================================//
    const fetchData = async () => {
        const resp = await fetch(url + page)
        const json = await resp.json()
        setFilteredCharacters(json.results)
        setCharacters(json.results)
        setInfo(json.info)
        localStorage.setItem("page", JSON.stringify(page))
    }
    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <div className={"characters"}>
            <div className={"characters__wrap"}>
                <CharacterDetails active={active} setActive={setActive} character={character} />
                <div className={"characters__functions"}>
                    <div className={"characters__pagination"}>
                        <button style={{opacity: page === 1 && 0, pointerEvents: page === 1 && "none"}} onClick={() => setPage(page => page - 1)}>prev</button>
                        <p>Page: {page} (Total: {info.pages})</p>
                        <button style={{opacity: page === info.pages && 0, pointerEvents: page === info.pages && "none"}} onClick={() => setPage(page => page + 1)}>next</button>
                    </div>
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
                </div>
                <div className={"characters__display"}>
                    {filteredCharacters.map(el =>
                        <div className={"characters__item"} key={el.id}>
                            <h4>{el.name}</h4>
                            <img src={el.image} alt={el.name} />
                            <p>Gender: {el.gender}</p>
                            <p>Status: {el.status}</p>
                            <div className={"characters__button"}>
                                <button onClick={() => toModal(el)}>Details</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Characters;