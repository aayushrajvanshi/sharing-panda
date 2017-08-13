import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelectedCategory, toggleFilter } from 'Actions/actions.js';
import Checkbox from 'Components/Checkbox.jsx';

class CategoryFilterContainer extends Component {
    toggleCheckbox = label => {
        this.props.onCategoryChange(label);
        this.props.onFilterChange(label);
    }
    createCheckbox = label => {
        let count = this.props.fundraisers.filter(fundraiser => fundraiser.category === label);
        let isChecked = this.props.selectedCategories.indexOf(label) !== -1 ? true : false
        return <Checkbox
            label={label}
            count={count.length}
            isChecked={isChecked}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    }
    createCheckboxes = () => (
        this.props.categories.map(this.createCheckbox)
    )
    render() {
        return (
            <div>
                <h5 className="uk-text-primary uk-text-uppercase uk-text-bold uk-margin-small-bottom">Category</h5>
                {this.createCheckboxes()}
            </div>
        );
    }
}

var getvisibleFundraisers = (fundraisers, searchText, selectedTypes) => {
    const visibleFundraisers = fundraisers
        .filter((fundraiser) => {
            return (_.includes(fundraiser.description.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.type.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.category.toLowerCase(), searchText.toLowerCase())) &&
                (selectedTypes.length !== 0 ? selectedTypes.indexOf(fundraiser.type) !== -1 : fundraiser.type);
        });
    return visibleFundraisers;
}

const mapStateToProps = (state, ownProps) => {
    const { categories, fundraisers, searchText, selectedTypes, selectedCategories } = state.fundraisers;
    return {
        categories,
        selectedCategories,
        fundraisers: getvisibleFundraisers(fundraisers, searchText, selectedTypes)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCategoryChange: (category) => {
            dispatch(toggleSelectedCategory(category))
        },
        onFilterChange: (category) => {
            dispatch(toggleFilter(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterContainer);