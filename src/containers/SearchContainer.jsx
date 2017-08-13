import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { setSearchText } from 'Actions/actions.js';

class SearchContainer extends Component {
    onInputChange = (e) => {
        e.preventDefault();
        this.props.setSearchText(e.target.value);
    }

    render() {
        var { searchText } = this.props;
        return (
            <input className="uk-input uk-form-width-medium" placeholder="Search" value={searchText} type="text" onChange={this.onInputChange} />
        );
    }
}

const mapStateToProps = state => {
    const { searchText } = state.fundraisers;
    return {
        searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchText: (searchText) => {
            dispatch(setSearchText(searchText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);