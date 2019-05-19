import { createStore, combineReducers } from 'redux';

import calculator from './calculator/calculatorReducer';
import comments from './comments/commentReducer';

const store = createStore(combineReducers({
    calculator,
    comments
}), {
    calculator: 2019,
    comments: [
        'hi',
        'Hello'
    ]
});
export default store;
