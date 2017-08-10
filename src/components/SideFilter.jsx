import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox.jsx';

import * as actions from './../actions/actions.js';

class SideFilter extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = [];
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.indexOf(label) !== -1) {
            this.selectedCheckboxes.splice(this.selectedCheckboxes.indexOf(label), 1);
        } else {
            this.selectedCheckboxes.push(label);
        }
        this.props.addFilter(this.selectedCheckboxes);
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxes = (list) => (
        list.map(this.createCheckbox)
    )

    render() {
        var { type, list } = this.props;
        return (
            <div className="side-filter">
                <p>{type}</p>
                {this.createCheckboxes(list)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addFilter: (filter) => {
            dispatch(actions.addFilter(filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideFilter);