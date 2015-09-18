import {  createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';
import { devTools, persistState } from 'redux-devtools';

const createStoreWithMiddleware = compose(
	  applyMiddleware(thunkMiddleware, loggerMiddleware),
	  devTools(),
	  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
	  createStore
);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
const store = configureStore();
export default store;
