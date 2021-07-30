import React from 'react';
import "./Header.css"
import {useHistory} from "react-router";

const Header = () => {
    const history = useHistory()
    return (
        <div className={"header"}>
            <div className={"header__wrap"}>
                <ul className={"header__logo"}>
                    <li onClick={() => history.push("/")}>Pecode test</li>
                </ul>
                <ul className={"header__menu"}>
                    <li onClick={() => history.push("/characters")}>Characters</li>
                    <li onClick={() => history.push("/locations")}>Locations</li>
                    <li onClick={() => history.push("/episodes")}>Episodes</li>
                    <li onClick={() => history.push("/my-watch-list")}>My watch list</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;