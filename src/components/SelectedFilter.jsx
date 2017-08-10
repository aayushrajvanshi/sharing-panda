import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedFilter extends Component {
    render() {
        var { filters } = this.props;
        var listFilters = filters.map((el) => {
            return <li>{el} <span></span></li>
        })
        var clearList = filters.length === 0 ? null : (() => {
            return <li>CLEAR ALL</li>
        })();

        // }
        return (
            <div>
                <ul className="selected-filter">
                    {listFilters}
                    {clearList}
                </ul>
            </div>
        );
    }
}

SelectedFilter.defaultProps = {
    filters: []
}

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.fundraisers.selectedFilters
    }
}

export default SelectedFilter;