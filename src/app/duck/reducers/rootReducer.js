// import { contacts } from '../../static-data'
import { combineReducers } from 'redux';

import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';


export default combineReducers({
    user,
    contacts,
    activeUserId
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