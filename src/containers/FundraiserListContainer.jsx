import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import FundraisersList from 'Components/FundraisersList.jsx';
import Fundraiser from 'Components/Fundraiser.jsx';

import { toggleSelectedType } from 'Actions/actions.js';

const FundraiserListContainer = (props) => {
    var { fundraisers } = props;
    var total = fundraisers.length;
    var nodes = fundraisers.map((fundraiser, index) => {
        return <Fundraiser key={fundraiser.id} {...fundraiser} />      
    });
    return (
        <FundraisersList >
            {nodes}
        </FundraisersList>
    );
}

var getVisibleFundraisers = (fundraisers, searchText, selectedSorting, selectedTypes, selectedCategories) => {
    const visibleFundraisers = fundraisers
        .filter((fundraiser) => {
            return (_.includes(fundraiser.description.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.type.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.category.toLowerCase(), searchText.toLowerCase())) &&
                (selectedTypes.length !== 0 ? selectedTypes.indexOf(fundraiser.type) !== -1 : fundraiser.type) &&
                (selectedCategories.length !== 0 ? selectedCategories.indexOf(fundraiser.category) !== -1 : fundraiser.category);
        }).sort((a, b) => {
            if (selectedSorting === 'type') {
                return a.type > b.type;
            }
            if (selectedSorting === 'category') {
                return a.category > b.category;
            }
        });
    return visibleFundraisers;
}

const mapStateToProps = state => {
    const { fundraisers, searchText, selectedSorting, selectedTypes, selectedCategories } = state.fundraisers;
    return {
        fundraisers: getVisibleFundraisers(fundraisers, searchText, selectedSorting, selectedTypes, selectedCategories)
    }
}

export default connect(mapStateToProps)(FundraiserListContainer);