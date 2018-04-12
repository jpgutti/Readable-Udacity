export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function addComment ({ item }) {
	return {
		type: 'ADD_COMMENT',
		id: item.id,
		item: item
	}
}

export function getComment ({ item }){
	return {
		type: 'GET_COMMENT',
		item: item
	}
}

export function updateComment ({ item }){
	return {
		type: 'UPDATE_COMMENT',
		id: item.id,
		item: item
	}
}

export function deleteComment ({ item }){
	return {
		type: 'DELETE_COMMENT',
		id: item.id,
		item: item
	}
}