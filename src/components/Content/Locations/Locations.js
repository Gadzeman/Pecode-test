import React, {useState, useEffect} from 'react';
import "./Locations.css"
import Pagination from "../Pagination/Pagination";
import LocationsFilter from "./LocationsFilter/LocationsFilter";
import Location from "./Location/Location";

const Locations = () => {
    const url = "https://rickandmortyapi.com/api/location?page="
    const pageLocalStorage = localStorage.getItem("page")
    const [page, setPage] = useState(pageLocalStorage ? JSON.parse(pageLocalStorage) : 1)
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFilteredLocations] = useState([])
    const [info, setInfo] = useState([])
    const fetchData = async () => {
        const resp = await fetch(url + page)
        const json = await resp.json()
        setLocations(json.results)
        setFilteredLocations(json.results)
        setInfo(json.info)
        localStorage.setItem("page", JSON.stringify(page))
    }
    useEffect(() => {
        fetchData()
    }, [page])
    console.log(filteredLocations)
    return (
        <div className={"locations"}>
            <div className={"locations__wrap"}>
                <div className={"locations__functions"}>
                    <Pagination page={page} setPage={setPage} info={info}/>
                    <LocationsFilter locations={locations} setFilteredLocations={setFilteredLocations} setLocations={setLocations} />
                </div>
                <div className={"location__display"}>
                    {filteredLocations.map(el => <Location location={el} key={el.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default Locations;