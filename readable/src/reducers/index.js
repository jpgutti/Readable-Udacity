import { combineReducers } from 'redux';
import posts from './post';
import comment from './comment';

export default combineReducers({
	posts,
	comment
});