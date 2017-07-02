export var searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return action.text;
        default:
            return state;
    }
};

var nextTodoId = 1;
export var todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: nextTodoId++,
                    text: action.text
                }
            ];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};


export var mapReducer = (state = {
    'isFetching': false,
    'url': undefined
}, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};


export var userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];
        default:
            return state;
    }
};

export var fundraiserReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FUNDRAISER':
            return [
                ...state,
                action.fundraiser
            ];
        default:
            return state;
    }
};

export var fetchFundraiserReducer = (state = {
    'isFetching': false,
    'fundraisers': []
}, action) => {
    switch (action.type) {
        case 'START_FUNDRAISER_FETCH':
            return {
                isFetching: true,
                fundraisers: []
            };
        case 'COMPLETE_FUNDRAISER_FETCH':
            return {
                isFetching: false,
                fundraisers: action.fundraisers
            };
        default:
            return state;
    }
};

export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                display_name: action.display_name,
                photo_url: action.photo_url
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}