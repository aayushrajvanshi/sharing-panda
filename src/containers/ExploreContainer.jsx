import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideFilter from 'Components/SideFilter.jsx';
import TopFilter from 'Components/TopFilter.jsx';
import FundraiserContainer from './FundraiserContainer.jsx';

import * as actions from 'Actions/actions.js';

const type = ['Individual', 'Charity/NGO'];
const category = ['Animals', 'Arts & Media', 'Children', 'Community', 'Education', 'Elderly', 'Emergencies', 'Human Rights', 'Medical', 'Memorials', 'Others'];

class ExploreContainer extends Component {
    componentWillMount() {
        this.props.AddFundraisers();
    }
    render() {
        return (
            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-4@m side-filter">
                            <SideFilter key="TYPE" type="TYPE" list={type} />
                            <SideFilter key="CATEGORY" type="CATEGORY" list={category} />
                        </div>
                        <div className="uk-width-expand@m">
                            <div className="top-filter">
                                 <TopFilter /> 
                            </div>
                            <div className="fundraiser">
                                <FundraiserContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return state
}

const fundraisers = [{
    "campaigner": "user1",
    "description": "Support 'mud-on-the-boots' conservationists working to protect India's vanishing wildlife!",
    "donations": {
        "donation1": true,
        "donation3": true
    },
    "end_date": 1501353000000,
    "fund_raised": 5100,
    "goal_amount": 600000,
    "no_of_donations": 2,
    "supporters": "212",
    "title": "Empowering India's Grassroots Conservationists",
    "type": "Wildlife Conservation"
},
{
    "campaigner": "user1",
    "description": "Support an ALS patient at Bangalore",
    "donations": {
        "donation2": true,
        "donation4": true
    },
    "end_date": 1504031400000,
    "fund_raised": 1100,
    "goal_amount": 400000,
    "no_of_donations": 2,
    "supporters": "202",
    "title": "Support an ALS patient at Bangalore",
    "type": "Medical"
},
{
    "campaigner": "user2",
    "description": "Foster and medical aid for 5 kittens",
    "donations": {
        "donation5": true
    },
    "end_date": 1502735400000,
    "fund_raised": 150,
    "goal_amount": 700000,
    "no_of_donations": 1,
    "supporters": "432",
    "title": "Foster and medical aid for 5 kittens",
    "type": "Wildlife Conservation"
},
{
    "campaigner": "user4",
    "description": "The 100 Story House: A children's library.",
    "end_date": 1501525800000,
    "fund_raised": 0,
    "goal_amount": 600000,
    "no_of_donations": 0,
    "supporters": "22",
    "title": "The 100 Story House: A children's library.",
    "type": "Personal"
}];

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AddFundraisers: () => {
            dispatch(actions.addFundraisers(fundraisers))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExploreContainer);