import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";    // 비동기를 나타냄 = 미들웨어
import rootReducer from "../reducers/index";
import {createLogger} from "redux-logger";

const logger=createLogger()
const middleware=[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    middleware:middleware,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
})
export default store