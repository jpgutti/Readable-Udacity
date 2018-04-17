import {
	ADD_POST,
	UPDATE_POST,
	GET_POST,
	DELETE_POST,
	GET_POSTS
} from '../actions/posts'

const initialState = {}

export default function posts(state = initialState, action){
	switch(action.type){
		case ADD_POST:
			return {
				...state,
				[action.id]:action.item
			}
		case GET_POST:
			return {
				...action.item.map((item) => {
					item[item.id] = item;
					return item
				}, [])
			}
		case GET_POSTS: 
			return action.item
		case UPDATE_POST:
			return {
				...state,
				[action.id]:action.item
			}
		case DELETE_POST:
			return {

			}

		default:
			return state
	}
}