import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger} from 'redux-logger'
import thunk  from 'redux-thunk';
import "./index.css";
import "tachyons";

import App from "./Containers/App";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();
//const rootReducers = combineReducers({searchRobots, requestRobots })
const store = createStore(searchRobots, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
