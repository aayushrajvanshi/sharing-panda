import React from 'react';
import PropTypes from 'prop-types';

const FundraisersList = ({ children }) => (
    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small uk-grid-match uk-flex" data-uk-grid>
        {children}
    </div>
)

export default FundraisersList;

