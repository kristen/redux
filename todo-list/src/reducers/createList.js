import { RECEIVE_TODO } from '../actions';

const createList = (filter) => (state = [], action) => {
    if (action.filter !== filter) {
        return state;
    }
    switch (action.type) {
        case RECEIVE_TODO:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

// reducer is default export
export default createList;

// selectors
// (in same file where structure of state is defined so we don't need to expose structure)

export const getIds = (state) => state;
