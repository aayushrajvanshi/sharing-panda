import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelectedType, toggleFilter } from 'Actions/actions.js';
import Checkbox from 'Components/Checkbox.jsx';

class TypeFilterContainer extends Component {
    toggleCheckbox = label => {
        this.props.onTypeChange(label);
        this.props.onFilterChange(label);
    }

    createCheckbox = (label) => {
        let count = this.props.fundraisers.filter(fundraiser => fundraiser.type === label);
        let isChecked = this.props.selectedTypes.indexOf(label) !== -1 ? true : false
        return <Checkbox
            label={label}
            count={count.length}
            isChecked={isChecked}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    }
    createCheckboxes = () => (
        this.props.types.map(this.createCheckbox)
    )
    render() {
        return (
            <div>
                <h5 className="uk-text-primary uk-text-uppercase uk-text-bold uk-margin-small-bottom">Type</h5>
                {this.createCheckboxes()}
            </div>
        );
    }
}

var getVisibleFundraisers = (fundraisers, searchText, selectedCategories) => {
    const visibleFundraisers = fundraisers
        .filter((fundraiser) => {
            return (_.includes(fundraiser.description.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.type.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.category.toLowerCase(), searchText.toLowerCase())) &&
                (selectedCategories.length !== 0 ? selectedCategories.indexOf(fundraiser.category) !== -1 : fundraiser.category);
        });
    return visibleFundraisers;
}

const mapStateToProps = (state, ownProps) => {
    const { types, fundraisers, searchText, selectedTypes, selectedCategories } = state.fundraisers;
    return {
        types,
        selectedTypes,
        fundraisers: getVisibleFundraisers(fundraisers, searchText, selectedCategories)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTypeChange: (type) => {
            dispatch(toggleSelectedType(type))
        },
        onFilterChange: (type) => {
            dispatch(toggleFilter(type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilterContainer);