import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions';
import { combineReducers } from 'redux';

const createList = (filter) => {
    const ids = (state = [], action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case FETCH_TODOS_SUCCESS:
                return action.response.map(todo => todo.id);
            default:
                return state;
        }
    }

    const isFetching = (state = false, action) => {
        if (action.filter != filter) {
            return state;
        }
        switch (action.type) {
            case FETCH_TODOS_REQUEST:
                return true;
            case FETCH_TODOS_SUCCESS:
                return false;
            case FETCH_TODOS_FAILURE:
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if (action.filter != filter) {
            return state;
        }
        switch (action.type) {
            case FETCH_TODOS_FAILURE:
                return action.message;
            case FETCH_TODOS_REQUEST:
            case FETCH_TODOS_SUCCESS:
                return null;
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage,
    });
};

// reducer is default export
export default createList;

// selectors
// (in same file where structure of state is defined so we don't need to expose structure)

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;
