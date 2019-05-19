import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'tachyons';

import App from './Containers/App';
import { searchRobots } from './reducers';
const store = createStore(searchRobots)

console.log(store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);


