import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducer.js";
import thunk from "redux-thunk"

const reducers = combineReducers({ users: usersReducer });

export const store = createStore(reducers, applyMiddleware(thunk));