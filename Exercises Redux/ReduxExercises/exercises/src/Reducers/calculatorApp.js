import { createStore } from 'redux';
import reducer from './reducer';
import * as actionCreators from './actionsCreators';

const store = createStore(reducer)
export default store;