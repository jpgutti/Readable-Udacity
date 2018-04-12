import {
	ADD_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
	GET_COMMENT
} from '../actions/comment';

const initialState = {};

export default function comments(state = initialState, action) {
	switch(action.type){
		case 'ADD_COMMENT':
			return{
				...state,
				[action.id]:action.item
			}

		case 'UPDATE_COMMENT':
			return{
				...state,
				[action.id]:action.item
			}

		case 'DELETE_COMMENT':
			return{
				...state,
				
			}
		case 'GET_COMMENT':
			return{
				...action.item.reduce((result, item) => {
					result[item.id] = item;
					return result;
			 	}, {})
			} 

			default:
				return state;

	}
}