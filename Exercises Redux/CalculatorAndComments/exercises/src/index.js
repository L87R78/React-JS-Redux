import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './calculatorApp';

ReactDOM.render((
    <Provider store={store}>
        < App />
    </Provider>
)
    , document.getElementById('root')
);

