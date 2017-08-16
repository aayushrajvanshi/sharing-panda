import {
    ADD_TODO,
    SET_SEARCH_TEXT,
    TOGGLE_SELECTED_TYPE,
    TOGGLE_SELECTED_CATEGORY,
    TOGGLE_FILTER,
    SET_SORTING,
    REMOVE_FILTER,
    REMOVE_ALL_FILTERS,
    TOGGLE_LOGIN_MODAL,
    TOGGLE_SIGNUP_MODAL
} from 'Constants/actionTypes';

import UIkit from 'uikit';

import firebase, { database, googleProvider, facebookProvider } from 'Firebase/index.js';

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

export var login = (uid, display_name, photo_url) => {
    return {
        type: "LOGIN",
        uid,
        display_name,
        photo_url
    }
};

export var startGoogleLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Auth worked', result);
        }, (error) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Unable to auth', error);
        });
    };
};

export var startFacebookLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(facebookProvider).then((result) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Auth worked', result);
        }, (error) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Unable to auth', error);
        });
    };
};

export var startEmailLogin = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Auth worked', result);
        }, (error) => {
            UIkit.modal($("#login-modal")).hide();
            console.log('Unable to auth', error);
        });
    };
};

export var logout = () => {
    return {
        type: "LOGOUT"
    }
};

export var startLogout = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => { console.log('Logged Out'); });
    };
};


export var addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    };
};

export var startAddUser = (first_name, last_name) => {
    return (dispatch, getState) => {
        var user = {
            first_name,
            last_name
        };

        var userRef = database.child('users').push(user);

        return userRef.then(() => {
            dispatch(addUser({
                ...user,
                id: userRef.key
            }));
        });
    };
};


export var addFundraisers = (fundraisers) => {
    return {
        type: 'ADD_FUNDRAISERS',
        fundraisers
    };
};

export var startAddFundraisers = () => {
    return (dispatch, getState) => {
        var fundraisersRef = database.child('fundraisers');

        return fundraisersRef.once('value').then((snapshot) => {
            var fundraisers = snapshot.val() || {};
            var parsedFundraisers = [];
            Object.keys(fundraisers).forEach((fundraiserId) => {
                parsedFundraisers.push({
                    id: fundraiserId,
                    ...fundraisers[fundraiserId]
                });
            });
            dispatch(addFundraisers(parsedFundraisers));
        });

    };
}


export function setSearchText(search) {
    return {
        type: SET_SEARCH_TEXT,
        search
    }
}

export function toggleSelectedType(text) {
    return {
        type: TOGGLE_SELECTED_TYPE,
        text
    }
}

export function toggleSelectedCategory(category) {
    return {
        type: TOGGLE_SELECTED_CATEGORY,
        category
    }
}

export function toggleFilter(filter) {
    return {
        type: TOGGLE_FILTER,
        filter
    }
}


export function setSorting(sorting) {
    return {
        type: SET_SORTING,
        sorting
    }
}


export function removeFilter(filter) {
    return {
        type: REMOVE_FILTER,
        filter
    }
}

export function removeAllFilters() {
    return {
        type: REMOVE_ALL_FILTERS
    }
}

