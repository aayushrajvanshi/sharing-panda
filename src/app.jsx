import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router-dom';
// import * as firebase from "firebase";

var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Styles
require('./styles/app.scss');

//Components
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <div >
                <Route path="/" component={NavBar} />
                <Route path="/" component={Home} />
                <Route path="/" component={Footer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

