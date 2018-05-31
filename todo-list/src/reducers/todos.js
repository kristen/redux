import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, VisibilityFilters } from "../actions";
import todo from './todo';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action),
            };
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.id];
        default:
            return state;
    }
}

const todos = combineReducers({
    byId,
    allIds,
});

// reducer is default export
export default todos;

// selector for todos, so put in the file where todos structure defined
const getAllTodos = (state) =>
    state.allIds.map(id => state.byId[id]);

export const getVisibileTodos = (
    state,
    filter
) => {
    const allTodos = getAllTodos(state);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return allTodos;
        case VisibilityFilters.SHOW_ACTIVE:
            return allTodos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return allTodos.filter(t => t.completed);
        default:
            return state;
    }
};
