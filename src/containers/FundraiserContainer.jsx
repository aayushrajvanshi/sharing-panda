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
            <div className="uk-section uk-section-muted uk-padding-remove-top">
                <div className="uk-background uk-background-cover uk-margin-bottom uk-height-medium uk-visible@m" style={{ 'backgroundImage': 'url(' + img1 + ')' }} >
                </div>
                <div className="uk-container">
                    <div className="uk-grid-divider uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-5@m uk-visible@m">
                            <div className="uk-tile uk-tile-default uk-padding-small uk-padding-remove-horizontal" style={{ 'zIndex': '979' }} data-uk-sticky="offset: 80; bottom: true">
                                <TypeFilterContainer />
                                <hr />
                                <CategoryFilterContainer />
                            </div>
                        </div>
                        <div className="uk-offcanvas-content uk-hidden@m">
                            <div className="uk-margin-small-top uk-flex uk-flex-between">
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
                        <div className="uk-width-expand@m">
                            <div className="uk-tile uk-tile-default uk-padding-remove">
                                <div className="uk-tile uk-tile-default uk-padding-small uk-padding-remove-horizontal uk-visible@m">
                                    <div className="uk-flex uk-flex-between">
                                        <SearchContainer />
                                        <SortContainer />
                                    </div>
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
                </div>
            </div >
        );
    }
}

export default FundraiserContainer;