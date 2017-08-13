import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignDetail from 'Components/CampaignDetail.jsx';

class FundraiserDetailContainer extends Component {
    render() {
        let { id } = this.props.match.params;
        let fundraiser = this.props.fundraisers.filter(fundraiser => fundraiser.id === id)[0];
        return (
            <div>
                <CampaignDetail fundraiser={fundraiser} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { fundraisers } = state.fundraisers;
    return {
        fundraisers
    }
}

export default connect(mapStateToProps)(FundraiserDetailContainer);