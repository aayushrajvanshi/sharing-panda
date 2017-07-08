import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

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
import FAQ from './components/FAQ.jsx';
import FundraisingTips from './components/FundraisingTips.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CampaignDetail from './components/CampaignDetail.jsx';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch(actions.login(user.uid, user.displayName, user.photoURL));
        browserHistory.push('/');
    } else {
        store.dispatch(actions.logout());
        browserHistory.push('/');
    }
});

store.dispatch(actions.startAddFundraisers());

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter forceRefresh={!supportsHistory}>
            <ScrollToTop>
                <Route render={({ location }) => (
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={3000}
                        transitionLeaveTimeout={3000}
                    >
                        <Route path="/" component={NavBar} />
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={UserProfile} />
                        <Route path="/explore-campaigns" component={ExploreCampaigns} />
                        <Route path="/start-campaign" component={StartCampaign} />
                        <Route path="/how-it-works" component={HowItWorks} />
                        <Route path="/faq" component={FAQ} />
                        <Route path="/fundraising-tips" component={FundraisingTips} />
                        <Route path="/campaign-detail" component={CampaignDetail} />
                        <Route path="/" component={Footer} />
                    </CSSTransitionGroup>
                )} />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

