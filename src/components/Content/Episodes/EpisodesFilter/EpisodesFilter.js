import React from 'react';
import "./EpisodesFilter.css"

const EpisodesFilter = ({episodes, setFilteredEpisodes, filterButton, setFilterButton}) => {
    const filterEpisodes = () => {
        const filteredEpisodes = filterButton
            ?
            episodes.sort((a, b) => a.episode.localeCompare(b.episode))
            :
            episodes.sort((a, b) => b.episode.localeCompare(a.episode))
        setFilteredEpisodes(filteredEpisodes)
        setFilterButton(!filterButton)
    }
    return (
        <div className={"episodes__filter"}>
            <p onClick={filterEpisodes}>{filterButton ? "First Episodes" : "Last Episodes"}</p>
        </div>
    );
};

export default EpisodesFilter;