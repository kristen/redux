import 'babel-polyfill';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import todoApp from './reducers';
import TodoApp from './components/TodoApp';

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
