import React, {useState} from 'react';
import "./WatchList.css"
import MyWatchList from "./MyWatchList/MyWatchList";
import AddWatchList from "./AddWatchList/AddWatchList";
import {useSelector} from "react-redux";

const WatchList = () => {
    const [active, setActive] = useState(false)
    const {watchList} = useSelector(store => store.watchList)
    console.log(watchList)
    return (
        <div className={"list"}>
            <div className={"list__wrap"}>
                <ul>
                    <li onClick={() => setActive(true)}>Add Watch List</li>
                </ul>
                {watchList.map(el => <MyWatchList list={el} key={el.id} />)}
                <AddWatchList active={active} setActive={setActive} />
            </div>
        </div>
    );
};

export default WatchList;