import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import firebase from 'Firebase/index';

var actions = require('Actions/actions.js');
var store = require('./store/configureStore').configure();
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Styles
require('./styles/app.scss');

//Components
import Login from 'Components/Login';
import NavBar from 'Components/NavBar';
import Home from 'Components/Home';
import Footer from 'Components/Footer';
import UserProfile from 'Components/UserProfile';
import StartCampaign from 'Components/StartCampaign';
import HowItWorks from 'Components/HowItWorks';
import FAQ from 'Components/FAQ';
import FundraisingTips from 'Components/FundraisingTips';
import ScrollToTop from 'Components/ScrollToTop';
import CampaignDetail from 'Components/CampaignDetail';
import Team from 'Components/Team';

//Containers
import ExploreCampaigns from 'Containers/ExploreContainer';
// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         store.dispatch(actions.login(user.uid, user.displayName, user.photoURL));
//         browserHistory.push('/');
//     } else {
//         store.dispatch(actions.logout());
//         browserHistory.push('/');
//     }
// });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <div>
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
                    <Route path="/team-sharing-panda" component={Team} />
                    <Route path="/" component={Footer} />
                </div>
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

