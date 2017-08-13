import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
var thunk = require('redux-thunk').default;
import { createLogger } from 'redux-logger';
const logger = createLogger();

import { searchReducer, todoReducer, mapReducer, authReducer, userReducer, fundraiserReducer } from 'Reducers/reducers.js';

export var configure = () => {
    const reducer = combineReducers({
        searchText: searchReducer,
        todos: todoReducer,
        map: mapReducer,
        auth: authReducer,
        users: userReducer,
        fundraisers: fundraiserReducer
    });

    const store = createStore(reducer, compose(
        applyMiddleware(thunk, logger),
        autoRehydrate(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    persistStore(store);    
    return store;
};