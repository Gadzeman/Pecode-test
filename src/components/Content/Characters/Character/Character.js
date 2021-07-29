import React from 'react';
import "./Character.css"

const Character = ({character, toModal}) => {
    return (
        <div className={"character"}>
            <h4>{character.name}</h4>
            <img src={character.image} alt={character.name} />
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <div className={"character__button"}>
                <button onClick={() => toModal(character)}>Details</button>
            </div>
        </div>
    );
};

export default Character;