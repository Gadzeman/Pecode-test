import React, {useState} from 'react';
import "./AddWatchList.css"
import {v4 as uuid4} from "uuid"
import {useDispatch} from "react-redux";
import {addList} from "../../../../redux/action-creators";

const AddWatchList = ({active, setActive}) => {
    const dispatch = useDispatch()
    const [episodeName, setEpisodeName] = useState("")
    const obj = {
        id: uuid4(),
        name: episodeName
    }
    const addNewList = () => {
        setActive(false)
        setEpisodeName("")
        dispatch(addList(obj))
    }
    const cancelNewList = () => {
        setActive(false)
        setEpisodeName("")
    }
    return (
        <div className={active ? "add add__active" : "add"} onClick={() => setActive(false)}>
            <div className={"add__content"} onClick={(e) => e.stopPropagation()}>
                <div className={"add__top"}>
                    <p>Add New Watch List</p>
                    <input value={episodeName} onChange={({target: {value}}) => setEpisodeName(value)} type="text" placeholder={"Enter episode"}/>
                </div>
                <div className={"add__bottom"}>
                    <button onClick={addNewList}>Add</button>
                    <button onClick={cancelNewList}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddWatchList;