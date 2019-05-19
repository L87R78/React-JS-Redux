import * as actionsType from './actionsType';

export function add(value) {
    return {
        type: actionsType.ADD,
        value
    };
}

export function subtract(value) {
    return {
        type: actionsType.SUBTRACT,
        value
    };
}

export function multiply(value) {
    return {
        type: actionsType.MULTIPLY,
        value
    };
}

export function divide(value) {
    return {
        type: actionsType.DIVIDE,
        value
    }
}
