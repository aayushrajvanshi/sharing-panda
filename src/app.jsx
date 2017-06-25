import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Styles
require('./styles/app.scss');

//Components
import TopBar from './components/TopBar.jsx';
import NavBar from './components/NavBar.jsx';
import CampaignCard from './components/CampaignCard.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <div >
            <Route path="/" component={TopBar} />
            <Route path="/" component={NavBar} />
            <Route path="/" component={CampaignCard} />
        </div>
    </Router>,
    document.getElementById('root')
);