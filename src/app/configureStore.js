import { createStore } from 'redux';
import rootReducer from './duck/reducers/rootReducer';

// intial state will be initialized using reducer
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;