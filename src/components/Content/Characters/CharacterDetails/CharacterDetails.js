import React from 'react';
import "./CharacterDetails.css"

const CharacterDetails = ({active, setActive, character}) => {
    return (
        <div className={active ? "details__modal active" : "details__modal"} onClick={() => setActive(false)}>
            <div className={active ? "details__content content__active" : "details__content"} onClick={(e) => e.stopPropagation()}>
                {Object.keys(character).length !== 0 &&
                <div className={"details__character"}>
                    <h4>{character.name}</h4>
                    <img src={character.image} alt={character.name} />
                    <p>Species: {character.species}</p>
                    <p>Created: {character.created.slice(0, 10)}</p>
                    <p>Type: {character.type === "" ? "Unknown" : character.type}</p>
                    <p>Episodes: {character.episode.length}</p>
                    <p>Location: {character.location.name}</p>
                    <p></p>
                </div>
                }
            </div>
        </div>
    );
};

export default CharacterDetails;