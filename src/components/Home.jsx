import React, { Component } from 'react';
import CampaignCard from './CampaignCard.jsx';
import img1 from '../images/img4.jpg';

class Home extends Component {
    render() {
        return (
            <div className="uk-child-width-1-1@s uk-light" data-uk-grid>
                <div className="uk-section uk-section-muted uk-padding-remove">
                    <div className="uk-background-fixed uk-background-cover uk-height-large uk-light uk-flex"  style={{ 'background-image': 'url(' + img1 + ')' }}>
                    </div>
                </div>
                <div className="uk-section uk-section-muted uk-margin-remove">
                    <div className="uk-container">
                        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center" data-uk-grid>
                            <div>
                                <div className="uk-tile uk-tile-default uk-padding-small" ><CampaignCard /></div>
                            </div>
                            <div>
                                <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                            </div>
                            <div>
                                <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                            </div>
                            <div>
                                <div className="uk-tile uk-tile-default uk-padding-small"><CampaignCard /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-secondary uk-height-large uk-margin-remove">
                    <div className="uk-container">
                        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                    <h3 className="uk-card-title">Left</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                                    <h3 className="uk-card-title">Right</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-primary uk-height-large uk-margin-remove">
                    <div className="uk-container">

                        <h3>Section</h3>

                        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="uk-section uk-section-secondary uk-height-large uk-margin-remove">
                    <div className="uk-container">

                        <h3>Section</h3>

                        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="uk-section uk-section-primary uk-height-large uk-margin-remove">
                    <div className="uk-container">

                        <h3>Section</h3>

                        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;