import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import timeReducer from "./timeReduser";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    timeReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))