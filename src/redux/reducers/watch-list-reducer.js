import {
    ADD_LIST,
    REMOVE_LIST
} from "../action-types";

const localStorageState = localStorage.getItem("watchList")
const initialState = localStorageState ? JSON.parse(localStorageState) : {
    watchList: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST: {
            return {
                ...state,
                watchList: [...state.watchList, action.payload]
            }
        }
        case REMOVE_LIST: {
            return {
                ...state,
                watchList: state.watchList.filter(el => action.payload !== el.id)
            }
        }
        default: {
            return state
        }
    }
}

export default reducer