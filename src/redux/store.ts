import {combineReducers, createStore, compose , applyMiddleware} from "redux";
import {todoReducer} from "./todo-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    todo: todoReducer,
});

export type appStateType = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));
