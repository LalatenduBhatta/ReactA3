import { legacy_createStore, combineReducers } from "redux";

import CountReducer from "../Reducer/CountReducer";
import StudentReducer from "../Reducer/StudentReducer";

let rootReducer = combineReducers({ CountReducer, StudentReducer })

let store = legacy_createStore(rootReducer)

export default store;