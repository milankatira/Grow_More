import { combineReducers } from "redux";

import authReducer from "./Auth";


const reducers ={
    auth: authReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;