import * as actionsTypes from './actionsTypes';

export default function calculate(oldState = 123, action){
    switch(action.type){
        case actionsTypes.ADD: return oldState + action.value;
        case actionsTypes.SUBTRACT: return oldState - action.value;
        case actionsTypes.MULTIPLY: return oldState * action.value;
        case actionsTypes.DIVIDE: return oldState / action.value;

        default: return oldState;
    }
}