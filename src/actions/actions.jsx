import axios from 'axios';
import firebase, { firbaseRef, googleProvider } from './../firebase/';

export var changeSearchText = (text) => {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        text
    };
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export var removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};

export var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    };
};

export var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    };
};

export var fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());
        axios.get('http://ipinfo.io').then((res) => {
            var loc = res.data.loc;
            var baseUrl = 'http://maps.google.com?q=';
            dispatch(completeLocationFetch(baseUrl + loc));
        });
    };
};

export var startLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            console.log('AUth worked', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => { console.log('Logged Out'); });
    };
};