import { getAllPosts } from '../utils/Api';

export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';


export function addPost({ post }){
	return {
		type: 'ADD_POST',
		id: post.id,
		item: post
	}
}

export function getPosts({ post }){
	return {
		type: 'GET_POST',
		id: post.id,
		item: post
	}
}

export function editPost({ post }){
	return {
		type: 'UPDATE_POST',
		id: post.id,
		item: post
	}
}

export function deletePost({ post }){
	return {
		type: 'DELETE_POST',
		id: post.id,
		item: post
	}
}

export const fetchAllPosts = () => dispatch => {
	return getAllPosts()
		.then(res => dispatch(getPosts(res)))
} 