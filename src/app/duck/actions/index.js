import * as types from '../types';

export const setActiveUserId = (userId) =>{
    return {
        type: types.SET_ACTIVE_USER_ID,
        payload: userId
    }
}