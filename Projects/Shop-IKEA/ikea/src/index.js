import React from 'react';
import ReactDOM from 'react-dom';
import './Style/bootstrap.min.css';
import './Style/site.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import App from './App';
import reducers from './Reducers/reducers';
import { createStore, combineReducers , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
    ,document.getElementById('root')
);


