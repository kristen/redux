import { ADD_TODO, TOGGLE_TODO, VisibilityFilters } from "../actions";

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed,
            });
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

// reducer is default export
export default todos;

// selector for todos, so put in the file where todos structure defined
export const getVisibileTodos = (
    state,
    filter
) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return state;
        case VisibilityFilters.SHOW_ACTIVE:
            return state.filter(t => !t.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return state.filter(t => t.completed);
        default:
            return state;
    }
};
