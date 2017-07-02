import axios from 'axios';
import firebase, { database, googleProvider, facebookProvider } from './../firebase/';

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
            console.log('Auth worked', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};

export var startFacebookLogin = () => {
    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(facebookProvider).then((result) => {
            console.log('Auth worked', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};

export var startEmailLogin = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log('Auth worked', result);
        }, (error) => {
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

export var addFundraiser = (fundraiser) => {
    return {
        type: 'ADD_FUNDRAISER',
        fundraiser
    };
};

export var startAddFundraiser = (title, type, campaigner, description, days_left, goal_amount, supporters) => {
    return (dispatch, getState) => {
        var fundraiser = {
            title,
            type,
            campaigner,
            description,
            days_left,
            goal_amount,
            supporters
        };

        var fundraiserRef = database.child('fundraisers').push(fundraiser);

        return fundraiserRef.then(() => {
            dispatch(addFundraiser({
                ...fundraiser,
                id: fundraiserRef.key
            }));
        });
    };
};

export var startFundraiserFetch = () => {
    return {
        type: 'START_FUNDRAISER_FETCH'
    };
};

export var completeFundraiserFetch = (fundraisers) => {
    return {
        type: 'COMPLETE_FUNDRAISER_FETCH',
        fundraisers
    };
};

export var fetchFundraisers = () => {
    return (dispatch, getState) => {
        dispatch(startFundraiserFetch());
        var fundraiserRef = database.child('fundraisers');
        fundraiserRef.once('value').then((snapshot) => {
            console.log(snapshot.val());
            dispatch(completeFundraiserFetch(snapshot.val()));
        });
    };
};