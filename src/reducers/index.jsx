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