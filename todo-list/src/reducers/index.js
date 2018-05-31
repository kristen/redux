import { combineReducers } from 'redux';
import { VisibilityFilters } from "../actions";
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    all: createList(VisibilityFilters.SHOW_ALL),
    active: createList(VisibilityFilters.SHOW_ACTIVE),
    completed: createList(VisibilityFilters.SHOW_COMPLETED),
});

const todos = combineReducers({
    byId,
    listByFilter,
});

// reducer is default export
export default todos;

// selectors
export const getVisibileTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};
