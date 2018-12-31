import * as types from '../types';

export const setActiveUserId = (userId) =>{
    return {
        type: types.SET_ACTIVE_USER_ID,
        payload: userId
    }
}

export const setTypingValue = (inputValue) =>{
    return {
        type: types.SET_TYPING_VALUE,
        payload: inputValue
    }
}

export const sendMessage = (message, userId) => {
    return {
        type: types.SEND_MESSAGE,
        payload: {
            message,
            userId
        }
    }
}