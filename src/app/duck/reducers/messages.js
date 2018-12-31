import { getMessages } from '../../static-data';
import * as types from '../types';

export default function messagesReducer(state = getMessages(10), action) {
    
    console.log(state);
    switch (action.type) {
        case types.SEND_MESSAGE:
            const {message, userId} = action.payload;
            const allUserMsgs = state[userId];
            
            return {
                ...state,
                [userId]: [...allUserMsgs, {
                    text: message,
                    is_user_msg: true
                }]
            }

        default: 
            return state;
    }
}