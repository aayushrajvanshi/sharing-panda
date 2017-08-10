import React, { Component } from 'react';
import SearchFilter from './SearchFilter.jsx';
import Sorter from './Sorter.jsx';
import TrendFilter from './TrendFilter.jsx';
import SelectedFilter from './SelectedFilter.jsx';

var filters = ['Children', 'Education', 'Charity/NGO'];

class TopFilter extends Component {
    render() {
        return (
            <div>
                <div className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-2@m side-filter">
                        <SearchFilter />
                    </div>
                    <div className="uk-width-1-2@m side-filter">
                        <Sorter />
                    </div>
                </div>
                <TrendFilter />
                 <SelectedFilter filters={filters} /> 
            </div>
        );
    }
}

export default TopFilter;