import { combineReducers } from 'redux';
import { VisibilityFilters, RECEIVE_TODO } from "../actions";

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TODO:
            // const nextState = { ...state }; // shallow copy
            // action.response.forEach(todo => {
            //     // only mutating one level deep so pure function
            //     nextState[todo.id] = todo;
            // });
            // return nextState;
            return action.response.reduce((nextState, todo) => {
                // only mutating one level deep so pure function
                nextState[todo.id] = todo;
                return nextState;
            }, { ...state } /* shallow copy */);
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    if (action.filter !== VisibilityFilters.SHOW_ALL) {
        return state;
    }
    switch (action.type) {
        case RECEIVE_TODO:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const activeIds = (state = [], action) => {
    if (action.filter !== VisibilityFilters.SHOW_ACTIVE) {
        return state;
    }
    switch (action.type) {
        case RECEIVE_TODO:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const completedIds = (state = [], action) => {
    if (action.filter !== VisibilityFilters.SHOW_COMPLETED) {
        return state;
    }
    switch (action.type) {
        case RECEIVE_TODO:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const idsByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds,
});

const todos = combineReducers({
    byId,
    idsByFilter,
});

// reducer is default export
export default todos;

// selector for todos, so put in the file where todos structure defined
export const getVisibileTodos = (state, filter) => {
    const ids = state.idsByFilter[filter];
    return ids.map(id => state.byId[id]);
};
