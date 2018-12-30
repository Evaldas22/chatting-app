import { createStore } from 'redux';
import rootReducer from './duck/reducers';
import { contacts } from './static-data';

const store = createStore(rootReducer, {contacts});

export default store;