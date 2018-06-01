import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

// action types ​

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
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
                response: normalize(response, schema.arrayOfTodos),
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

export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        dispatch({
            type: ADD_TODO_SUCCESS,
            response: normalize(response, schema.todo),
        });
    }
);

export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        dispatch({
            type: TOGGLE_TODO_SUCCESS,
            response: normalize(response, schema.todo),
        });
    }
);
