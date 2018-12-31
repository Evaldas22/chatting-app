// import { contacts } from '../../static-data'
import { combineReducers } from 'redux';

import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';


export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing
});


/*
const rootReducer = (state = { contacts }, action) => {
    switch (action.type){
        default: 
            return state;
    }
}

export default rootReducer;
*/