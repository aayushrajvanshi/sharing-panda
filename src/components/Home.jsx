import React, { Component } from 'react';
import CampaignCard from './CampaignCard.jsx';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

class Home extends Component {
    render() {
        return (
            <div className="uk-child-width-1-1@s uk-light" data-uk-grid>
                <div className="uk-section uk-section-muted uk-margin-remove uk-padding-remove">
                    <div className="uk-background-cover" style={{ 'background-image': 'url(' + img1 + ')' }} data-uk-height-viewport="offset-bottom: 30">
                    </div>
                </div>
                {/*<nav className="uk-navbar-container uk-margin-remove" style={{ 'background-color': '#293a4b' }} data-uk-navbar data-uk-sticky>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li>
                                <a href="#">Parent</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </nav>*/}
                <div className="uk-section uk-section-muted uk-margin-remove">
                    <div className="uk-container uk-text-center">
                        <div className="uk-grid" data-uk-grid>
                            <div className="uk-width-1-3@m">
                                <div className="uk-text uk-text-default">
                                    <span data-uk-icon="icon: credit-card; ratio:8"></span>
                                    <div className="uk-h1 uk-margin-small-top uk-margin-small-bottom" style={{ 'color': 'black' }}>Rs.100 Crore+</div>
                                    <div className="uk-h4 uk-margin-remove" style={{ 'color': 'black' }}>raised</div>
                                </div>
                            </div>
                            <div className="uk-width-1-3@m">
                                <div className="uk-text uk-text-default uk-margin-left">
                                    <span data-uk-icon="icon: users; ratio:8"></span>
                                    <div className="uk-h1 uk-margin-small-top uk-margin-small-bottom" style={{ 'color': 'black' }}>2,00,000+</div>
                                    <div className="uk-h4 uk-margin-remove" style={{ 'color': 'black' }}>supporters</div>
                                </div>
                            </div>
                            <div className="uk-width-1-3@m">
                                <div className="uk-text uk-text-default uk-margin-left">
                                    <span data-uk-icon="icon: push; ratio:8"></span>
                                    <div className="uk-h1 uk-margin-small-top uk-margin-small-bottom" style={{ 'color': 'black' }}>30,000+</div>
                                    <div className="uk-h4 uk-margin-remove" style={{ 'color': 'black' }}>fundraisers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-secondary uk-margin-remove">
                    <div className="uk-container uk-text-center">
                        <div className="uk-h2 uk-margin-medium-bottom" style={{ 'color': 'black' }}>Asia's Most Visited And Trusted Crowdfunding Platform</div>
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>24 X 7 chat, email support</div>
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>Indian and foreign donations</div>
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>Mobile-friendly fundraisers</div>
                                </div>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>Sign up for free</div>
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>No time-limit or minimum goals</div>
                                    <div className="uk-h4 uk-text-left uk-margin-top-remove" style={{ 'color': 'black' }}><span className="uk-margin-small-right" style={{ 'color': 'red' }} data-uk-icon="icon: check; ratio:2"></span>Daily access to funds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-muted uk-margin-remove">
                    <div className="uk-container">
                        <div className="uk-container">
                            <div className="uk-h2 uk-margin-medium-bottom uk-text-center" style={{ 'color': 'black' }}>Trending Now</div>
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
                </div>
                <div className="uk-visible@s uk-section uk-section-muted uk-padding-remove uk-margin-remove">
                    <div className="uk-text-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-4@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img2 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-4@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img2 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-medium uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-hidden@s uk-section uk-section-muted uk-padding-remove uk-margin-remove">
                    <div className="uk-text-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-4@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img2 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-4@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img2 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-6@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img4 + ')' }}>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s uk-width-1-3@m">
                            <div className="uk-tile uk-height-small uk-tile-primary uk-padding-remove">
                                <div className="uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;