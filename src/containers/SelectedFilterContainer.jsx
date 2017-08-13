import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleSelectedBrand, removeFilter, removeAllFilters } from 'Actions/actions.js';
import Filter from 'Components/Filter.jsx';

class SelectedFilterContainer extends Component {
    removeFilter = filter => {
        this.props.onFilterRemove(filter);
    }
    removeAllFilters = () => {
        this.props.onAllFiltersRemove();
    }
    createFilter = filter => {
        return <Filter
            key={filter}
            filter={filter}
            handleRemoveFilter={this.removeFilter}
        />
    }
    createFilters = () => (
        this.props.selectedFilters.map(this.createFilter)
    )

    render() {
        var { fundraisers, selectedFilters } = this.props;
        var total = fundraisers.length;
        var clearList = selectedFilters.length === 0 ? null : (() => (<li className="uk-text-primary uk-text-bold uk-text-uppercase" style={{ 'cursor': 'pointer', 'fontSize': '0.8rem', 'marginBottom': '0.5rem' }} onClick={this.removeAllFilters}>CLEAR ALL</li>))();
        return (
            <div className="uk-flex uk-flex-between" >
                <div className="uk-flex-1">
                    <ul className="uk-flex uk-flex-wrap uk-flex-middle" style={{ 'listStyle': 'none', 'padding': '0', 'margin': '0' }}>
                        {this.createFilters()}
                        {clearList}
                    </ul>
                </div>
                <div className="uk-flex-none">
                    <h5 className="uk-text-primary uk-text-bold">{total} fundraisers</h5>
                </div>
            </div>
        );
    }
}

var getVisibleFundraisers = (fundraisers, searchText, selectedSort, selectedTypes, selectedCategories) => {
    const visibleFundraisers = fundraisers
        .filter((fundraiser) => {
            return (_.includes(fundraiser.description.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.type.toLowerCase(), searchText.toLowerCase())
                || _.includes(fundraiser.category.toLowerCase(), searchText.toLowerCase())) &&
                (selectedTypes.length !== 0 ? selectedTypes.indexOf(fundraiser.type) !== -1 : fundraiser.type) &&
                (selectedCategories.length !== 0 ? selectedCategories.indexOf(fundraiser.category) !== -1 : fundraiser.category);
        }).sort((a, b) => {
            if (selectedSort === 'price-low-to-high') {
                return a.price - b.price;
            }
            if (selectedSort === 'price-high-to-low') {
                return b.price - a.price;
            }
            if (selectedSort === 'type') {
                return a.type > b.type;
            }
            if (selectedSort === 'category') {
                return a.category > b.category;
            }
        });
    return visibleFundraisers;
}

const mapStateToProps = (state, ownProps) => {
    const { fundraisers, searchText, selectedSort, selectedTypes, selectedCategories, selectedFilters } = state.fundraisers;
    return {
        fundraisers: getVisibleFundraisers(fundraisers, searchText, selectedSort, selectedTypes, selectedCategories),
        selectedFilters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterRemove: (filter) => {
            dispatch(removeFilter(filter))
        },
        onAllFiltersRemove: () => {
            dispatch(removeAllFilters())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilterContainer);