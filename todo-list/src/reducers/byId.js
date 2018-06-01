const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.todos,
        };
    }
    return state;
};

// reducer is default export
export default byId;

// selectors
// (in same file where structure of state is defined so we don't need to expose structure)

export const getTodo = (state, id) => state[id];
