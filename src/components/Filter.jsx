import React, { Component, PropTypes } from 'react';

class Filter extends Component {
    onRemoveFilter = () => {
        const { handleRemoveFilter, filter } = this.props;
        handleRemoveFilter(filter);
    }

    render() {
        const { filter } = this.props;
        let styles = {
            'display': 'inline-block',
            'marginRight': '0.3rem',
            'fontSize': '0.7rem',
            'backgroundColor': '#1d1e30',
            'borderRadius': '50px',
            'padding': '2px 10px 2px 15px',
            'marginBottom': '0.5rem',
            'color': 'white',
            'cursor': 'pointer'
        }
        return (
            <li onClick={this.onRemoveFilter} style={styles}
                key={filter}>{filter}
                <span style={{ 'marginLeft': '0.6rem', 'color': 'white' }}><i className="fa fa-times" aria-hidden="true"></i></span>
            </li >
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleRemoveFilter: PropTypes.func.isRequired,
};

export default Filter;