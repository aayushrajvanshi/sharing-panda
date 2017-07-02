import React, { Component } from 'react';
import img1 from '../images/img2.jpg';
import img2 from '../images/img4.jpg';
import img3 from '../images/img5.jpg';

class StartCampaign extends Component {

    render() {
        return (
            <div className="uk-section uk-section-muted">
                <div className="uk-container uk-text-center">
                    <div className="uk-h2 uk-text-center">How Do you want to go about it ?</div>
                    <div className="uk-child-width-1-3@m uk-light uk-grid-match" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 200; repeat: true">
                        <div>
                            <div className="uk-card uk-card-default uk-card-body uk-height-large uk-padding-remove">
                                <div className="uk-background-cover uk-background-secondary uk-height-large" style={{ 'background-image': 'url(' + img1 + ')' }}>
                                    <div class="uk-position-bottom-center">
                                        <span data-uk-icon="icon: users; ratio:8" style={{ 'color': 'white' }}></span>
                                        <h3 className="uk-card-title" style={{ 'color': 'white' }}>Individual</h3>
                                        <p style={{ 'color': 'white' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-body uk-height-large uk-padding-remove">
                                <div className="uk-background-cover uk-background-secondary uk-height-large" style={{ 'background-image': 'url(' + img2 + ')' }}>
                                    <span data-uk-icon="icon: users; ratio:8" style={{ 'color': 'white' }}></span>
                                    <h3 className="uk-card-title" style={{ 'color': 'white' }}>Charity/NGO</h3>
                                    <p style={{ 'color': 'white' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-body uk-height-large uk-padding-remove">
                                <div className="uk-background-cover uk-background-secondary uk-height-large" style={{ 'background-image': 'url(' + img3 + ')' }}>
                                    <span data-uk-icon="icon: users; ratio:8" style={{ 'color': 'white' }}></span>
                                    <h3 className="uk-card-title" style={{ 'color': 'white' }}>Creative</h3>
                                    <p style={{ 'color': 'white' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartCampaign;