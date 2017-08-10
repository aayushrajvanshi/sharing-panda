import React, { Component } from 'react';

class SearchFilter extends Component {
    render() {
        return (
            <form className="uk-search uk-search-default">
                <span className="uk-search-icon-flip" data-uk-search-icon></span>
                <input className="uk-search-input" type="search" placeholder="Search..." />
            </form>
        );
    }
}

export default SearchFilter;