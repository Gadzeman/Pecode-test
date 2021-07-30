import React, {useState, useEffect} from 'react';
import "./Episodes.css"
import Pagination from "../Pagination/Pagination";
import EpisodesFilter from "./EpisodesFilter/EpisodesFilter";
import Episode from "./Episode/Episode";

const Episodes = () => {
    const url = "https://rickandmortyapi.com/api/episode?page="
    const pageLocalStorage = localStorage.getItem("page")
    const [page, setPage] = useState(pageLocalStorage ? JSON.parse(pageLocalStorage) : 1)
    const [episodes, setEpisodes] = useState([])
    const [filteredEpisodes, setFilteredEpisodes] = useState([])
    const [info, setInfo] = useState([])
    const [filterButton, setFilterButton] = useState(false)
    const fetchData = async () => {
        const resp = await fetch(url + page)
        const json = await resp.json()
        setFilteredEpisodes(json.results)
        setEpisodes(json.results)
        setInfo(json.info)
        localStorage.setItem("page", JSON.stringify(page))
    }
    useEffect(() => {
        fetchData()
    }, [page])
    console.log(episodes)
    return (
        <div className={"episodes"}>
            <div className={"episodes__wrap"}>
                <div className={"episodes__functions"}>
                    <Pagination page={page} setPage={setPage} info={info}/>
                    <EpisodesFilter episodes={episodes} setFilteredEpisodes={setFilteredEpisodes} filterButton={filterButton} setFilterButton={setFilterButton} />
                </div>
                <div className={"episodes__display"}>
                    {filteredEpisodes.map(el => <Episode episode={el} key={el.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default Episodes;