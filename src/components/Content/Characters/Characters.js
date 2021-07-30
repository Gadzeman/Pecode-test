import React, {useState, useEffect} from 'react';
import "./Characters.css"
import CharacterDetails from "./CharacterDetails/CharacterDetails";
import Pagination from "../Pagination/Pagination";
import CharactersFilter from "./CharactersFilter/CharactersFilter";
import Character from "./Character/Character";

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character?page="
    const pageLocalStorage = localStorage.getItem("page")
    const [page, setPage] = useState(pageLocalStorage ? JSON.parse(pageLocalStorage) : 1)
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const [info, setInfo] = useState([])
    //==========================for modal window============================//
    const [character, setCharacter] = useState({})
    const [active, setActive] = useState(false)
    const toModal = (el) => {
        setCharacter(el)
        setActive(true)
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
                    <Pagination page={page} setPage={setPage} info={info}/>
                    <CharactersFilter setFilteredCharacters={setFilteredCharacters} characters={characters}/>
                </div>
                <div className={"characters__display"}>
                    {filteredCharacters.map(el => <Character character={el} toModal={toModal} key={el.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default Characters;