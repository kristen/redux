import {  RECEIVE_TODOS } from "../actions";

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
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
