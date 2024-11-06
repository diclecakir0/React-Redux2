import {createStore, combineReducers, applyMiddleware} from 'redux';

import { userReducer } from './reducers/userReducer';

import {thunk} from 'redux-thunk';

// We combine reducers to handle the case of having multiple reducers in the project.
const rootReducer = combineReducers({
	userReducer,
});

// Create and export the store
export default createStore(rootReducer, applyMiddleware(thunk));
