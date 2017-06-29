import * as redux from 'redux';
var thunk = require('redux-thunk').default;
import { searchReducer, todoReducer, mapReducer } from './../reducers/index.jsx';
export var configure = () => {
    var reducer = redux.combineReducers({
        searchText: searchReducer,
        todos: todoReducer,
        map: mapReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};