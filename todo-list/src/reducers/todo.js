import { ADD_TODO_SUCCESS, TOGGLE_TODO } from "../actions";

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
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

export default todo;
