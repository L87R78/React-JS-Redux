import * as types from './actionsTypes';

export default function commentReducer(oldState = [], action) {
    switch (action.type) {
        case types.ADD_COMMENT:
                const newState = oldState.slice();
                newState.push(action.text);
                return newState;
        default:
            return oldState;
    }
} 