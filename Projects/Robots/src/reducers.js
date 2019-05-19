import { ChangeSearchField } from './constants';

const initialState = {
    searchField: '',
};

export function searchRobots(state = initialState, action = {}) {
    switch (action.type) {
        case ChangeSearchField:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};