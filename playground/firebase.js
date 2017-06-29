import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBaD_l5D3FTlmtTOSrayacIF0jYf3rp8sE",
    authDomain: "sharing-panda-58d84.firebaseapp.com",
    databaseURL: "https://sharing-panda-58d84.firebaseio.com",
    projectId: "sharing-panda-58d84",
    storageBucket: "sharing-panda-58d84.appspot.com",
    messagingSenderId: "574551445781"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: 'React App',
    users: {
        first_name: 'Aayush',
        last_name: 'Rajvanshi',
        age: 26
    }
});

export var googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

