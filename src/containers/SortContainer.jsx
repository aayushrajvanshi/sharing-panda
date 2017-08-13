import React, { Component } from 'react';
import { setSorting } from 'Actions/actions.js';
import { connect } from 'react-redux';

class SortContainer extends Component {
    onSortingChange = (e) => {
        e.preventDefault();
        this.props.changeSorting(e.target.value);
    }

    render() {
        var nodes = this.props.sortings.map((sort) => {
            return <option key={sort.value} value={sort.value}>{sort.id}</option>
        });
        return (
            <div className="uk-flex" style={{ 'justifySelf': 'end' }}>
                <label><span className="uk-visible@m">Sort By: </span><select className="uk-select uk-form-width-medium" value={this.props.selectedSorting} onChange={e => this.onSortingChange(e)}>
                    {nodes}
                </select>
                </label>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { sortings, selectedSorting } = state.fundraisers;
    return {
        sortings,
        selectedSorting
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSorting: (sorting) => {
            dispatch(setSorting(sorting))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);