import { combineReducers } from 'redux';
import { GOT_PLAYS } from '../actions';
import { routerStateReducer } from 'redux-react-router';

function app(state = {}, action){
	switch(action.type){
		case GOT_PLAYS:
			console.log("sadsad");
			return action;
			
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	router: routerStateReducer,
	app
});

export default rootReducer;