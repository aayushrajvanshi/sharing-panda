import * as redux from 'redux';
var thunk = require('redux-thunk').default;
import { createLogger } from 'redux-logger';
const logger = createLogger();

import { searchReducer, todoReducer, mapReducer, authReducer, fundraiserReducer, userReducer, fetchFundraiserReducer } from './../reducers/reducers.jsx';
export var configure = () => {
    const reducer = redux.combineReducers({
        searchText: searchReducer,
        todos: todoReducer,
        map: mapReducer,
        auth: authReducer,
        users: userReducer,
        fundraisers: fundraiserReducer,
        fetchfundraisers: fetchFundraiserReducer
    });

    const store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};