import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
    todos,
});

// reducer is default export
export default todoApp;

// put selector in same file where structure of state is defined
export const getVisibileTodos = (state, filter) =>
    fromTodos.getVisibileTodos(state.todos, filter);
