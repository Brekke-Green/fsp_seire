import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState, applyMiddleware(thunk))
};

export default configureStore;