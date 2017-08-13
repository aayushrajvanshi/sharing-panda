import {
    ADD_TODO,
    SET_SEARCH_TEXT,
    TOGGLE_SELECTED_TYPE,
    TOGGLE_SELECTED_CATEGORY,
    TOGGLE_FILTER,
    SET_SORTING,
    REMOVE_FILTER,
    REMOVE_ALL_FILTERS
} from 'Constants/actionTypes';

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

const fundraisers = [{
    "id": "1",
    "campaigner": "user1",
    "description": "Dolor aliquip irure aute ut ullamco fugiat sunt eu nisi.",
    "donations": {
        "donation1": true,
        "donation3": true
    },
    "end_date": 1501353000000,
    "fund_raised": 5100,
    "goal_amount": 600000,
    "no_of_donations": 2,
    "supporters": "212",
    "title": "Ea reprehenderit aliquip est qui quis ad sint et ut ut laboris consequat ex pariatur.",
    "type": "Individual",
    "category": "Animal",
    "days_left": 23
}, {
    "id": "2",
    "campaigner": "user1",
    "description": "Dolor aliquip irure aute ut ullamco fugiat sunt eu nisi.",
    "donations": {
        "donation1": true,
        "donation3": true
    },
    "end_date": 1501353000000,
    "fund_raised": 5100,
    "goal_amount": 600000,
    "no_of_donations": 2,
    "supporters": "212",
    "title": "Ea reprehenderit aliquip est qui quis ad sint et ut ut laboris consequat ex pariatur.",
    "type": "Individual",
    "category": "Animal",
    "days_left": 34
}, {
    "id": "3",
    "campaigner": "user1",
    "description": "Cupidatat culpa consequat culpa ad consectetur labore labore minim excepteur incididunt veniam eu ea.",
    "donations": {
        "donation2": true,
        "donation4": true
    },
    "end_date": 1504031400000,
    "fund_raised": 1100,
    "goal_amount": 400000,
    "no_of_donations": 2,
    "supporters": "202",
    "title": "Officia laborum velit amet do pariatur magna cillum Lorem.",
    "type": "Charity/NGO",
    "category": "Animal",
    "days_left": 54
}, {
    "id": "4",
    "campaigner": "user2",
    "description": "Enim do occaecat officia minim dolor ex laboris eu occaecat qui mollit et commodo sunt.",
    "donations": {
        "donation5": true
    },
    "end_date": 1502735400000,
    "fund_raised": 150,
    "goal_amount": 700000,
    "no_of_donations": 1,
    "supporters": "432",
    "title": "Aliquip eiusmod dolore aute dolor velit.",
    "type": "Individual",
    "category": "Children",
    "days_left": 2
}, {
    "id": "5",
    "campaigner": "user4",
    "description": "Nisi incididunt labore sint duis in cupidatat ad.",
    "end_date": 1501525800000,
    "fund_raised": 0,
    "goal_amount": 600000,
    "no_of_donations": 0,
    "supporters": "22",
    "title": "Consequat qui consectetur laboris anim.",
    "type": "Charity/NGO",
    "category": "Children",
    "days_left": 45
}, {
    "id": "6",
    "campaigner": "user4",
    "description": "Lorem ipsum sint ut cupidatat in do velit culpa sunt nulla ex.",
    "end_date": 1501525800000,
    "fund_raised": 0,
    "goal_amount": 600000,
    "no_of_donations": 0,
    "supporters": "22",
    "title": "Ipsum pariatur ut et do est magna qui proident deserunt excepteur dolor ex eiusmod.",
    "type": "Individual",
    "category": "Children",
    "days_left": 25
}, {
    "id": "7",
    "campaigner": "user1",
    "description": "Sunt reprehenderit officia tempor officia dolor voluptate proident mollit officia consequat tempor enim ullamco.",
    "donations": {
        "donation1": true,
        "donation3": true
    },
    "end_date": 1501353000000,
    "fund_raised": 5100,
    "goal_amount": 600000,
    "no_of_donations": 2,
    "supporters": "212",
    "title": "Eiusmod culpa mollit ipsum mollit mollit irure quis.",
    "type": "Individual",
    "category": "Animal",
    "days_left": 12
}, {
    "id": "8",
    "campaigner": "user1",
    "description": "Minim aliqua sit ex ipsum id qui aliquip amet aliqua sint.",
    "donations": {
        "donation2": true,
        "donation4": true
    },
    "end_date": 1504031400000,
    "fund_raised": 1100,
    "goal_amount": 400000,
    "no_of_donations": 2,
    "supporters": "202",
    "title": "Cillum nulla non ipsum cupidatat consectetur.",
    "type": "Charity/NGO",
    "category": "Human Rights",
    "days_left": 89
}, {
    "id": "9",
    "campaigner": "user2",
    "description": "Incididunt deserunt elit tempor ipsum non.",
    "donations": {
        "donation5": true
    },
    "end_date": 1502735400000,
    "fund_raised": 150,
    "goal_amount": 700000,
    "no_of_donations": 1,
    "supporters": "432",
    "title": "Commodo culpa labore veniam commodo qui est exercitation id nulla aliqua aute excepteur duis ex.",
    "type": "Individual",
    "category": "Education",
    "days_left": 12
}, {
    "id": "10",
    "campaigner": "user4",
    "description": "Sint dolor id incididunt sunt mollit do mollit do ipsum amet tempor culpa.",
    "end_date": 1501525800000,
    "fund_raised": 0,
    "goal_amount": 600000,
    "no_of_donations": 0,
    "supporters": "22",
    "title": "Quis cillum mollit adipisicing eu pariatur.",
    "type": "Charity/NGO",
    "category": "Education",
    "days_left": 56
}, {
    "id": "11",
    "campaigner": "user4",
    "description": "Voluptate adipisicing consequat dolore sit sint ullamco commodo aute in quis.",
    "end_date": 1501525800000,
    "fund_raised": 0,
    "goal_amount": 600000,
    "no_of_donations": 0,
    "supporters": "22",
    "title": "Est id adipisicing nostrud tempor quis occaecat ipsum elit dolore.",
    "type": "Individual",
    "category": "Medical",
    "days_left": 34
}];


const initialState = {
    fundraisers: fundraisers,
    types: ['Individual', 'Charity/NGO'],
    categories: ['Animal', 'Arts & Media', 'Children', 'Community', 'Education', 'Elderly', 'Emergencies', 'Human Rights', 'Medical', 'Memorials', 'Others'],
    trends: ['Most Funded', 'Ending Soon'],
    searchText: '',
    sortings: [{
        id: 'Type',
        value: 'type'
    }, {
        id: 'Category',
        value: 'category'
    }],
    selectedTypes: [],
    selectedCategories: [],
    selectedTrend: '',
    selectedSorting: 'type',
    selectedFilters: []
};

export var fundraiserReducer = (state = initialState, action) => {
    const selectedTypes = [...state.selectedTypes];
    const selectedCategories = [...state.selectedCategories];
    const selectedFilters = [...state.selectedFilters];
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.search
            };
        case TOGGLE_SELECTED_TYPE:
            if (selectedTypes.indexOf(action.text) !== -1) {
                selectedTypes.splice(selectedTypes.indexOf(action.text), 1);
            } else {
                selectedTypes.push(action.text);
            }
            return {
                ...state,
                selectedTypes
            };
        case TOGGLE_SELECTED_CATEGORY:
            if (selectedCategories.indexOf(action.category) !== -1) {
                selectedCategories.splice(selectedCategories.indexOf(action.category), 1);
            } else {
                selectedCategories.push(action.category);
            }
            return {
                ...state,
                selectedCategories
            };
        case SET_SORTING:
            return {
                ...state,
                selectedSorting: action.sorting
            };
        case TOGGLE_FILTER:
            if (selectedFilters.indexOf(action.filter) !== -1) {
                selectedFilters.splice(selectedFilters.indexOf(action.filter), 1);
            } else {
                selectedFilters.push(action.filter);
            }
            return {
                ...state,
                selectedFilters
            };
        case REMOVE_FILTER:
            selectedFilters.splice(selectedFilters.indexOf(action.filter), 1);
            if (selectedTypes.indexOf(action.filter) !== -1) {
                selectedTypes.splice(selectedTypes.indexOf(action.filter), 1);
            }
            if (selectedCategories.indexOf(action.filter) !== -1) {
                selectedCategories.splice(selectedCategories.indexOf(action.filter), 1);
            }
            return {
                ...state,
                selectedFilters,
                selectedTypes,
                selectedCategories
            };
        case REMOVE_ALL_FILTERS:
            selectedFilters.length = 0;
            selectedTypes.length = 0;
            selectedCategories.length = 0;
            return {
                ...state,
                selectedFilters,
                selectedTypes,
                selectedCategories
            };
        default:
            return state
    }
};