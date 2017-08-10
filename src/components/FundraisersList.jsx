import React from 'react';
import PropTypes from 'prop-types';

const FundraisersList = ({ totalFundraisers, children }) => (
    <div>
        <h3>{totalFundraisers} fundraisers found</h3>
        {children}
    </div>
)

export default FundraisersList;

