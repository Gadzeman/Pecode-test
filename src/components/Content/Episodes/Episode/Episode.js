import React from 'react';
import "./Episode.css"

const Episode = ({episode}) => {
    return (
        <div className={"episode"}>
            {episode.id} - {episode.name} (Air date: {episode.air_date})
        </div>
    );
};

export default Episode;