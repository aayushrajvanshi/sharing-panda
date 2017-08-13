import React, { Component } from 'react';
import { connect } from 'react-redux';
import img1 from 'Images/img5.jpg';

import FundraiserListContainer from './FundraiserListContainer.jsx';
import SearchContainer from './SearchContainer.jsx';
import SortContainer from './SortContainer.jsx';
import TrendFilterContainer from './TrendFilterContainer.jsx';
import TypeFilterContainer from './TypeFilterContainer.jsx';
import CategoryFilterContainer from './CategoryFilterContainer.jsx';
import SelectedFilterContainer from './SelectedFilterContainer.jsx';

class FundraiserContainer extends Component {
    render() {
        return (
            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-background uk-background-cover uk-margin-bottom uk-visible@m" style={{ 'minHeight': '300px', 'backgroundImage': 'url(' + img1 + ')' }} >
                    </div>
                    <div className="uk-grid-divider uk-flex uk-flex-center uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-5@m uk-visible@m">
                            <TypeFilterContainer />
                            <hr />
                            <CategoryFilterContainer />
                        </div>
                        <div className="uk-offcanvas-content uk-hidden@m">
                            <div className="uk-flex uk-flex-left">
                                <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-usage">Refine</button>
                                <SortContainer />
                            </div>
                            <div id="offcanvas-usage" data-uk-offcanvas>
                                <div className="uk-offcanvas-bar uk-background-primary">
                                    <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                                    <TypeFilterContainer />
                                    <hr />
                                    <CategoryFilterContainer />
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-4-5@m">
                            <div className="uk-flex uk-flex-between uk-visible@m">
                                <SearchContainer />
                                <SortContainer />
                            </div>
                            <div className="uk-flex uk-flex-center uk-visible@m">
                                <TrendFilterContainer />
                            </div>
                            <hr className="uk-margin-remove-top uk-visible@m" />
                            <SelectedFilterContainer />
                            <FundraiserListContainer />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default FundraiserContainer;