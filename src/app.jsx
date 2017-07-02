import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import firebase from './firebase/';

var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Styles
require('./styles/app.scss');

//Components
import Login from './components/Login.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import ExploreCampaigns from './components/ExploreCampaigns.jsx';
import StartCampaign from './components/StartCampaign.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Support from './components/Support.jsx';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch(actions.login(user.uid, user.displayName, user.photoURL));
        browserHistory.push('/');
    } else {
        store.dispatch(actions.logout());
        browserHistory.push('/');
    }
});

store.dispatch(actions.startAddFundraiser("Empowering India's Grassroots Conservationists", "Wildlife Conservation", "Cara Tejpal", "Support 'mud-on-the-boots' conservationists working to protect India's vanishing wildlife!", "21", "10,00,000", "212"));

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter forceRefresh={!supportsHistory}>
            <div >
                <Route path="/" component={NavBar} />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/explore-campaigns" component={ExploreCampaigns} />
                <Route path="/start-campaign" component={StartCampaign} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/support" component={Support} />
                <Route path="/" component={Footer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

