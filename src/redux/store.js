import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

// sets up the redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;