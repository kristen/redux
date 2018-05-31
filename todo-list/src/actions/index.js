import { v4 } from 'node-uuid';
import * as api from '../api';

// action types ​

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODO = 'RECEIVE_TODO';

// other constants

export const VisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'completed',
    SHOW_ACTIVE: 'active'
};

// action creators

const receiveTodos = (filter, response) => ({
    type: RECEIVE_TODO,
    filter,
    response,
});

export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(response =>
        receiveTodos(filter, response)
    );

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: v4(),
    text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});
