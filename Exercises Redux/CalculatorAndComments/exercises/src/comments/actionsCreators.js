import * as types from './actionTypes';

function add_comment(text) {
    return{
        type: types.ADD_COMMENT,
        text
    };
}