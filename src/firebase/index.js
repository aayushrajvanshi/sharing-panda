import firebase from 'firebase';

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

export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var database = firebase.database().ref();
export default firebase;