import { v4 } from 'node-uuid';

// action types ​

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// other constants

export const VisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_COMPLETED: 'completed',
    SHOW_ACTIVE: 'active'
};

// action creators

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: v4(),
    text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});
