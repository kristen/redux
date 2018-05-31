import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/:filter?' component={TodoApp} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;
