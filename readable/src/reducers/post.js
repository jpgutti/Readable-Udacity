import {
	ADD_POST,
	UPDATE_POST,
	GET_POST,
	DELETE_POST
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
				...action.item.reduce((result, item) => {
					result[item.id] = item;
					return result
				}, {})
			}
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