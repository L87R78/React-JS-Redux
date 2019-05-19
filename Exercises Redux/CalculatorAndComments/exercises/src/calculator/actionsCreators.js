import * as actionsTypes from './actionsTypes';

export function add(value) {
    return {
        type: actionsTypes.ADD,
        value
    };
}

export function subtract(value) {
    return {
        type: actionsTypes.SUBTRACT,
        value
    };
}

export function multiply(value) {
    return {
        type: actionsTypes.MULTIPLY,
        value
    };
}

export function divide(value) {
    return {
        type: actionsTypes.DIVIDE,
        value
    };
}