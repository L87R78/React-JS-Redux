
import * as actionsType from './actionsType';

function Reducer (oldState = 0, action) {
    switch (action.type) {
        case actionsType.ADD: return oldState + action.value;  
        case actionsType.SUBTRACT: return oldState - action.value;  
        case actionsType.MULTIPLY: return oldState * action.value;  
        case actionsType.DIVIDE: return oldState / action.value;  
        default:  return oldState;    
    }  
}

export default Reducer;