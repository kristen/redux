import 'babel-polyfill';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// only from a file called throttle because we don't want all of lodash
import throttle from 'lodash/throttle';
import todoApp from './reducers';
import TodoApp from './components/TodoApp';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}), 1000);

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
