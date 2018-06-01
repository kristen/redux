import { FETCH_TODOS_SUCCESS } from "../actions";

const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            return action.response.reduce((nextState, todo) => {
                // only mutating one level deep so pure function
                nextState[todo.id] = todo;
                return nextState;
            }, { ...state } /* shallow copy */);
        default:
            return state;
    }
};

// reducer is default export
export default byId;

// selectors
// (in same file where structure of state is defined so we don't need to expose structure)

export const getTodo = (state, id) => state[id];
