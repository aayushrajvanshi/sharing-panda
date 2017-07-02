import React, { Component } from 'react';
import * as Redux from 'react-redux';
import img1 from '../images/img4.jpg';

class UserProfile extends Component {
    render() {
        return (
            <div className="uk-section uk-section-secondary uk-preserve-color">
                <div className="uk-container">
                    <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-1@m">
                            <div className="uk-tile uk-tile-muted">
                                <div className="uk-child-width-1-3@s uk-light" data-uk-grid>
                                    <div>
                                        <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'background-image': 'url(' + this.props.auth.photo_url + ')' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-3@m">
                            <div className="uk-tile uk-tile-muted">
                            </div>
                        </div>
                        <div className="uk-width-2-3@m">
                            <div className="uk-tile uk-tile-muted uk-light" style={{ 'color': 'black' }}>
                                <ul data-uk-tab>
                                    <li><a style={{ 'color': 'black' }} href="#">Item</a></li>
                                    <li><a style={{ 'color': 'black' }} href="#">Item</a></li>
                                    <li><a style={{ 'color': 'black' }} href="#">Item</a></li>
                                </ul>

                                <ul className="uk-switcher uk-margin">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default Redux.connect(
    mapStateToProps
)(UserProfile);