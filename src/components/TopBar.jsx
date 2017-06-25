import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <div id="topbar">
                <div className="uk-container">
                    <div className="uk-float-left">
                        <div className="uk-h6 uk-margin-remove" style={{ 'padding-top': '5px', 'color': 'white' }}>Call Us Now: +91 9997064005</div>
                    </div>
                    <div className="uk-float-right">
                        <a href="#" className="uk-icon-link uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></a>
                        <a href="#" className="uk-icon-link uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: twitter"></a>
                        <a href="#" className="uk-icon-link uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: instagram"></a>
                        <a href="#" className="uk-icon-link uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google-plus"></a>
                        <a href="#" className="uk-icon-link uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: youtube"></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;