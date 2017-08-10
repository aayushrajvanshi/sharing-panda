import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as actions from './../actions/actions.js';
import CampaignCard from './CampaignCardCopy.jsx';
import Categories from './fundraisers/Categories.jsx';

export class ExploreCampaigns extends Component {

    render() {
        var { fundraisers } = this.props;
        var card = fundraisers.map((o) => {
            return (
                <div className="uk-tile uk-tile-default uk-padding-small" >
                    <NavLink to="/campaign-detail"><CampaignCard key={o.id} title={o.title} type={o.type} campaigner={o.campaigner} description={o.description} days_left={o.days_left} goal_amount={o.goal_amount} supporters={o.supporters} /></NavLink>
                </div >
            )
        });
        return (
            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" data-uk-grid>
                        {card}
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        fundraisers: state.fundraisers
    }
}

export default Redux.connect(
    mapStateToProps
)(ExploreCampaigns);