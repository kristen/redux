const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l != listener);
        };
    };

    // initialize state
    dispatch({});

    return { getState, dispatch, subscribe };
}

const Counter = ({value}) => (
    <h1>{value}</h1>
);

const store = createStore(counter);
const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()} />,
        document.getElementById('root')
    );
};

store.subscribe(render);

window.onload = () => {
    render();
}
