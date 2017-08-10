import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FundraisersList from './../components/FundraisersList.jsx';
import Fundraiser from './../components/Fundraiser.jsx';

const FundraiserContainer = (props) => {
    var { fundraisers } = props;
    var totalFundraisers = fundraisers.length;
    return (
        <FundraisersList totalFundraisers={totalFundraisers}>
            {fundraisers.map((fundraiser, index) => {
                return <Fundraiser key={index} {...fundraiser} />
            })}
        </FundraisersList>
    );
}

const mapStateToProps = state => ({
    fundraisers: state.fundraisers.fundraisers
})

FundraiserContainer.defaultProps = {
    fundraisers: []
}
export default connect(mapStateToProps)(FundraiserContainer);