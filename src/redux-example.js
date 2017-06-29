import * as redux from 'redux';
console.log('Starting redux app');

var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();

var currentState = store.getState(); 
console.log(currentState);

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log(state);
    if (state.map.isFetching) {
        document.getElementById('root').innerHTML = 'Loading...';
    } else if (state.map.url) {
        var data = '<a href="' + state.map.url + '"target="_blank"></a>';
        console.log(data);
        document.getElementById('root').innerHTML = '<a href="' + state.map.url + ' "target="_blank">View your Location</a>';
    }
});
// unsubscribe();

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeSearchText('Work'));
store.dispatch(actions.changeSearchText('Dog'));
store.dispatch(actions.addTodo('Walk the Dog'));
store.dispatch(actions.addTodo('Learn Redux'));
store.dispatch(actions.removeTodo(1));