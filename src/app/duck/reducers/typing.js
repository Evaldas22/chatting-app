import * as types from '../types';

export default function typingReducer(state = '', action) {
    switch (action.type) {
        case types.SET_TYPING_VALUE:
            return action.payload;

        case types.SEND_MESSAGE:
            return '';
        
        default:
            return state;
    }
}