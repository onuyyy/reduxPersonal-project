import {combineReducers} from "redux";


import spaceReducer from "./spaceReducer";
export default  combineReducers({
    spaces:spaceReducer
})
