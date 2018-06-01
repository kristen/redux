import { v4 } from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';

// action types ​

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

// action creators

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }
    dispatch({
        type: FETCH_TODOS_REQUEST,
        filter,
    });
    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: FETCH_TODOS_SUCCESS,
                filter,
                response,
            });
        },
        error => {
            dispatch({
                type: FETCH_TODOS_FAILURE,
                filter,
                message: error.message || 'Something went wrong.',
            })
        }
    );
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
