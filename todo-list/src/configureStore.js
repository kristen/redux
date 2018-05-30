import { createStore } from 'redux';
// only from a file called throttle because we don't want all of lodash
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import todoApp from './reducers';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        todoApp,
        persistedState
    );

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }), 1000);

    return store;
};

export default configureStore;