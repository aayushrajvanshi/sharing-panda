import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import * as Redux from 'react-redux';
import * as actions from './../actions/actions.jsx';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    onLogin() {
        var { dispatch } = this.props;
        dispatch(actions.startLogin());
    }
    onLogout() {
        var { dispatch } = this.props;
        dispatch(actions.startLogout());
    }
    render() {
        // var uiConfig = {
        //     signInSuccessUrl: '<url-to-redirect-to-on-success>',
        //     signInOptions: [
        //         // Leave the lines as is for the providers you want to offer your users.
        //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //         firebase.auth.EmailAuthProvider.PROVIDER_ID
        //     ],
        //     // Terms of service url.
        //     tosUrl: '<your-tos-url>'
        // };

        // // Initialize the FirebaseUI Widget using Firebase.
        // var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // // The start method will wait until the DOM is loaded.
        // ui.start('#firebaseui-auth-container', uiConfig);
        return (
            <div>
                <div>
                    <button className="uk-button uk-button-primary" onClick={this.onLogin}>Log In</button>
                </div>
                <div>
                    <button className="uk-button uk-button-primary" onClick={this.onLogout}>Log Out</button>
                </div>
            </div>
        );
    }
}

export default Redux.connect()(Login);

