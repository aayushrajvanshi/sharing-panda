import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from './../actions/actions.jsx';
import logo from './../images/logo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin() {
        var { dispatch } = this.props;
        dispatch(actions.startLogin());
    }
    render() {
        return (
            <header className="navbar" data-uk-sticky="cls-active:uk-sticky-active">
                <nav className="uk-navbar-container uk-visible@m" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-margin-left uk-padding-small"><img src={logo} height="10%" alt="Logo" /></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li><a href="#">Browse Fundraisers</a></li>
                            <li><a href="#">Start a Fundraiser</a></li>
                            <li><a href="#">How it Works</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li ><button className="uk-button uk-button-secondary" onClick={this.onLogin}>Log In</button></li>
                        </ul>
                    </div>
                </nav>
                <nav className="uk-navbar-container uk-hidden@m" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-margin-left uk-padding-small"><img src={logo} height="10%" alt="Logo" /></li>
                        </ul>
                    </div>
                    <div className="uk-offcanvas-content">
                        <span style={{ 'position': 'absolute', 'right': '10px', 'cursor': 'pointer' }} data-uk-toggle="target: #offcanvas-usage"><i className="fa fa-bars" style={{ 'font-size': '30px' }} aria-hidden="true"></i></span>
                        <div id="offcanvas-usage" data-uk-offcanvas="mode: slide">
                            <div className="uk-offcanvas-bar" style={{ 'background-color': '#34495e' }}>
                                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                    <li><a href="#">Browse Fundraisers</a></li>
                                    <li className="uk-nav-divider"></li>
                                    <li><a href="#">Start a Fundraiser</a></li>
                                    <li className="uk-nav-divider"></li>
                                    <li><a href="#">How it Works</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        );
    };
}

export default Redux.connect()(NavBar);