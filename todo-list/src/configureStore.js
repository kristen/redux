import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from './reducers';

const thunk = (store) => (nextDispatch) => (action) =>
    typeof action === 'function' ?
        action(store.dispatch) :
        nextDispatch(action);

// TODO add an analytics middleware! :)

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
