import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as actions from './../actions/actions.js';
import logo from './../images/sharing-panda-logo.svg';
import Login from './Login.jsx';
import UIkit from 'uikit';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    onLogout = () => {
        var { dispatch } = this.props;
        dispatch(actions.startLogout());
    }
    handleSideBar = () => {
        $('html').removeClass();
        UIkit.offcanvas($("#side-nav-bar")).hide()
    }

    render() {
        var buttons = () => {
            if (!this.props.auth.uid) {
                return (<li>
                    <button id="login" className="uk-button uk-button-primary uk-margin-small-right" data-uk-toggle="target: #login-modal">Log In</button>
                    <button id="signup" className="uk-button uk-button-primary uk-margin-small-right" data-uk-toggle="target: #signup-modal">Sign Up</button>
                </li>
                );
            } else return (
                <li>
                    <div className="user-info">
                        <p className="user-greeting">Hi, {this.props.auth.display_name}</p>
                        <div className="user-icon">
                            <img src={this.props.auth.photo_url} alt="" />
                        </div>
                        <div data-uk-dropdown="pos: bottom-right; delay-hide: 400">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li>
                                    <NavLink to='/profile'>View Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/profile'>Edit Profile</NavLink>
                                </li>
                                <li className="uk-nav-divider"></li>
                                <li>
                                    <a href="#" onClick={this.onLogout}>Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        }
        var sideButtons = () => {
            if (!this.props.auth.uid) {
                return (
                    <div className="uk-clearfix">
                        <div className="uk-grid-small uk-flex-inline">
                            <div className="uk-float-left">
                                <a onClick={this.handleSideBar} data-uk-toggle="target: #login-modal">Log In</a>
                            </div>
                            <div className="uk-float-right">
                                <a onClick={this.handleSideBar} data-uk-toggle="target: #signup-modal">Sign Up</a>
                            </div>
                        </div>
                    </div>
                );
            } else return (
                <div>
                    <div>
                        <div>
                            <p className="user-greeting uk-margin-small-bottom">Hi, {this.props.auth.display_name}</p>
                        </div>
                        <div className="user-icon uk-margin-small-bottom" style={{ 'width': '80px', 'height': '80px' }}>
                            <img src={this.props.auth.photo_url} alt="" />
                        </div>
                    </div>
                    <button className="uk-button uk-button-primary" onClick={(e) => { this.onLogout(); this.handleSideBar() }}>Log Out</button>
                </div>

            );
        }
        return (
            <nav className="uk-navbar-container uk-box-shadow-medium" style={{ 'backgroundColor': 'white', 'height': '80px' }} data-uk-navbar data-uk-sticky>
                <div className="uk-navbar-left uk-margin-left uk-visible@m">
                    <ul className="uk-navbar-nav">
                        <li >
                            <div className="uk-light">
                                <Link className="uk-logo" to="/">
                                    <img src={logo} width="180" height="50" alt="" data-uk-svg />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-center uk-visible@m">
                    <ul className="uk-navbar-nav">
                        <li><NavLink activeStyle={{
                            color: '#1d1e30'
                        }} to="/explore-campaigns">Explore Fundraisers</NavLink></li>
                        <li><NavLink activeStyle={{
                            color: '#1d1e30'
                        }} to="/start-campaign">Start Your Fundraisers</NavLink></li>
                        <li><NavLink activeStyle={{
                            color: '#1d1e30'
                        }} to="/how-it-works">How it Works</NavLink></li>
                    </ul>
                </div>
                <div className="uk-navbar-center uk-hidden@m">
                    <ul className="uk-navbar-nav">
                        <li >
                            <div className="uk-light">
                                <Link className="uk-logo" to="/">
                                    <img src={logo} width="180" height="50" alt="" data-uk-svg />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right uk-margin-right uk-visible@m">
                    <ul className="uk-navbar-nav">
                        {buttons()}
                    </ul>
                </div>
                <div className="uk-navbar-right uk-margin-right uk-hidden@m">
                    <ul className="uk-navbar-nav">
                        <li>
                            <span data-uk-toggle="target: #side-nav-bar" data-uk-icon="icon: menu; ratio: 2"></span>
                        </li>
                    </ul>
                </div>
                <Login />

                <div className="uk-hidden@m" id="side-nav-bar" data-uk-offcanvas="mode: slide; overlay: true">
                    <div className="uk-offcanvas-bar uk-background-primary uk-flex uk-flex-column uk-text-center">
                        <button className="uk-offcanvas-close uk-close-large" type="button" data-uk-close></button>
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" data-uk-nav>
                            <li onClick={this.handleSideBar}><NavLink activeClassName="uk-active" to="/explore-campaigns">Explore Fundraisers</NavLink></li>
                            <li onClick={this.handleSideBar}><NavLink activeClassName="uk-active" to="/start-campaign">Start Your Fundraisers</NavLink></li>
                            <li onClick={this.handleSideBar}><NavLink activeClassName="uk-active" to="/how-it-works">How it Works</NavLink></li>
                        </ul>
                        {sideButtons()}
                        <div className="uk-margin-top">
                            <div className="uk-grid-small uk-child-width-auto uk-flex-inline" data-uk-grid>
                                <div>
                                    <a className="uk-icon-button" href="#" data-uk-icon="icon: facebook"></a>
                                </div>
                                <div>
                                    <a className="uk-icon-button" href="#" data-uk-icon="icon: twitter"></a>
                                </div>
                                <div>
                                    <a className="uk-icon-button" href="#" data-uk-icon="icon: mail"></a>
                                </div>
                                <div>
                                    <a className="uk-icon-button" href="#" data-uk-icon="icon: receiver"></a>
                                </div>
                            </div>
                        </div>
                        <div className="uk-margin-top">
                            <div className="uk-grid-small uk-child-width-auto uk-flex-inline" data-uk-grid>
                                <div className="uk-light">
                                    <a className="uk-logo" href="">
                                        <img src={logo} style={{ 'filter': 'invert(100%)' }} width="180" height="50" alt="" data-uk-svg />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        );
    };
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default Redux.connect(
    mapStateToProps
)(NavBar);