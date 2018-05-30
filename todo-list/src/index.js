import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('root')
);
