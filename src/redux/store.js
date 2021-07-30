import {createStore, applyMiddleware} from "redux";
import {reducers} from "./reducers";

const persister = (store) => (next) => (action) => {
    next(action)
    const {watchList} = store.getState()
    localStorage.setItem("watchList", JSON.stringify(watchList))
}
export const store = createStore(
    reducers,
    applyMiddleware(persister)
)