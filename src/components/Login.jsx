import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../actions/actions.js';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.onGoogleLogin = this.onGoogleLogin.bind(this);
        this.onFacebookLogin = this.onFacebookLogin.bind(this);
        this.onEmailLogin = this.onEmailLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    onGoogleLogin() {
        $('login-modal').hide();
        var { dispatch } = this.props;
        dispatch(actions.startGoogleLogin());
    }
    onFacebookLogin() {
        var { dispatch } = this.props;
        dispatch(actions.startFacebookLogin());
    }
    onEmailLogin() {
        var { dispatch } = this.props;
        dispatch(actions.startEmailLogin('aayush.rajvanshi@sharedpanda.com', 'abc123'));
    }
    onLogout() {
        var { dispatch } = this.props;
        dispatch(actions.startLogout());
    }
    render() {

        return (
            <div>
                <div id="login-modal" data-uk-modal="center: true">
                    <div className="uk-modal-dialog">
                        <div className="uk-modal-body uk-text-center uk-overflow-auto">
                            <form id="login-form" className="uk-form-stacked">
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                            <input className="uk-input uk-form-width-large" id="form-stacked-text" type="text" placeholder="Email Id" />
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                            <input className="uk-input uk-form-width-large" id="form-stacked-text" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button className="uk-button uk-button-large uk-button-primary uk-width-1-1" type="button" onClick={this.onEmailLogin}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="uk-clearfix">
                                    <div className="uk-float-left">
                                        <label style={{ 'font-size': '0.7rem' }}>Forgot Details?</label>
                                    </div>
                                    <div className="uk-float-right">
                                        <label style={{ 'font-size': '0.7rem' }}><input className="uk-checkbox" type="checkbox" /> Remember me</label>
                                    </div>
                                </div>
                                <hr className="uk-divider-icon" />
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button id="google-button" type="button" className="uk-visible@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onGoogleLogin}><span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google"></span>Login with Google</button>
                                        <button id="google-button" type="button" className="uk-hidden@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onGoogleLogin}><span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google"></span>Google</button>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button id="facebook-button" type="button" className="uk-visible@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onFacebookLogin}> <span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></span>Login with Facebook</button>
                                        <button id="facebook-button" type="button" className="uk-hidden@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onFacebookLogin}> <span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></span>Facebook</button>
                                    </div>
                                </div>
                                <p style={{ 'font-size': '0.7rem', 'margin-bottom': '0px' }}>I don't have an account yet. <span className="uk-link" style={{ 'font-size': '0.7rem', 'margin-bottom': '0px' }} data-uk-toggle="target: #signup-modal">Sign Up</span> </p>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="signup-modal" data-uk-modal="center: true">
                    <div className="uk-modal-dialog">
                        <div className="uk-modal-body uk-text-center uk-overflow-auto">
                            <form id="login-form" className="uk-form-stacked">
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                            <input className="uk-input uk-form-width-large" id="form-stacked-text" type="text" placeholder="Your Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                            <input className="uk-input uk-form-width-large" id="form-stacked-text" type="text" placeholder="Email Id" />
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                            <input className="uk-input uk-form-width-large" id="form-stacked-text" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button className="uk-button uk-button-large uk-button-primary uk-width-1-1 ">SIGN UP</button>
                                    </div>
                                </div>
                                <hr className="uk-divider-icon" />
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button id="google-button" className="uk-button uk-button-large uk-button-primary uk-width-1-1"><span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google"></span>Google</button>
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <div className="uk-form-controls">
                                        <button id="facebook-button" className="uk-button uk-button-large uk-button-primary uk-width-1-1"> <span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></span>Facebook</button>
                                    </div>
                                </div>
                                <p style={{ 'font-size': '0.7rem', 'margin-bottom': '0px' }}>Already have an account? <span className="uk-link" style={{ 'font-size': '0.7rem', 'margin-bottom': '0px' }} data-uk-toggle="target: #login-modal">Sign In</span> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Redux.connect()(Login);

