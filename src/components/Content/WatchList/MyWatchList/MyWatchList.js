import React from 'react';
import "./MyWatchList.css"
import {useDispatch} from "react-redux";
import {removeList} from "../../../../redux/action-creators";

const MyWatchList = ({list}) => {
    const dispatch = useDispatch()
    const removeFunctions = (id) => {
        const answer = window.confirm("Are you sure you want to delete this list?")
        answer && dispatch(removeList(id))
    }
    return (
        <div className={"list__item"}>
            <b>{list.name}</b>
            <button onClick={() => removeFunctions(list.id)}>Remove</button>
        </div>
    );
};

export default MyWatchList;