import firebase from 'firebase';
import firebaseui from 'firebaseui';

try {
    var config = {
        apiKey: "AIzaSyBaD_l5D3FTlmtTOSrayacIF0jYf3rp8sE",
        authDomain: "sharingpanda.com",
        databaseURL: "https://sharing-panda-58d84.firebaseio.com",
        projectId: "sharing-panda-58d84",
        storageBucket: "sharing-panda-58d84.appspot.com",
        messagingSenderId: "574551445781"
    };
    firebase.initializeApp(config);
} catch (e) {

}

var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
//ui.start('#firebaseui-auth-container', uiConfig);

export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var database = firebase.database().ref();
export default firebase;