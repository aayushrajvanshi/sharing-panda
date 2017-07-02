import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from './../actions/actions.jsx';
import CampaignCard from './CampaignCard.jsx';

export class ExploreCampaigns extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center" data-uk-grid>
                        <div>
                            <div className="uk-tile uk-tile-default uk-padding-small" ><CampaignCard /></div>
                        </div>
                        <div>
                            <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                        </div>
                        <div>
                            <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                        </div>
                        <div>
                            <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                        </div>
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