import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import Characters from "./Characters/Characters";
import Episodes from "./Episodes/Episodes";
import Locations from "./Locations/Locations";
import WatchList from "./WatchList/WatchList";

const Content = () => {
    return (
        <>
                <Switch>
                    <Route path={"/"} exact>
                        <Home/>
                    </Route>
                    <Route path={"/characters"}>
                        <Characters />
                    </Route>
                    <Route path={"/locations"}>
                        <Locations />
                    </Route>
                    <Route path={"/episodes"}>
                        <Episodes />
                    </Route>
                    <Route path={"/my-watch-list"}>
                        <WatchList />
                    </Route>
                </Switch>
        </>
    );
};

export default Content;