import 'babel-polyfill';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import todoApp from './reducers';
import TodoApp from './components/TodoApp';

const persistedState = {
    todos: [{
        id: '0',
        text: 'Learn React',
        completed: false,
    }, {
        id: '1',
        text: 'Learn Redux',
        completed: false,
    }],
};
const store = createStore(
    todoApp,
    persistedState
);
console.log(store.getState());

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
