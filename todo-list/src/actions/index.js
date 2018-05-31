import { v4 } from 'node-uuid';
import * as api from '../api';

// action types ​

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REQUEST_TODOS = 'REQUEST_TODOS';

// other constants

export const VisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'completed',
    SHOW_ACTIVE: 'active'
};

// action creators

const requestTodos = (filter) => ({
    type: REQUEST_TODOS,
    filter,
});

const receiveTodos = (filter, response) => ({
    type: RECEIVE_TODOS,
    filter,
    response,
});

export const fetchTodos = (filter) => (dispatch) => {
    dispatch(requestTodos(filter));
    return api.fetchTodos(filter).then(response => {
        dispatch(receiveTodos(filter, response));
    });
};

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: v4(),
    text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});
