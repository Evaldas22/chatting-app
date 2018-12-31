import * as types from '../types'; 

export default function activeUserIdReducer(state = null, action) {
    switch (action.type){
        case types.SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
}