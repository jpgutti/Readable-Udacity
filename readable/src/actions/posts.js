import { getAllPosts, createPost } from '../utils/Api';

export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POSTS = 'GET_POSTS';


export function addPost(post){
	return {
		type: 'ADD_POST',
		id: post.id,
		item: post
	}
}

export function getPosts( post ){
	return {
		type: 'GET_POSTS',
		item: post
	}
}

export function getPost( post ){
	return {
		type: 'GET_POST',
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
	getAllPosts()
		.then(res => {
			return dispatch(getPosts(res))
		})
}

export const createPosts = ( post ) => dispatch => {
	console.log("Api " + post);
	createPost(post)
		.then(res => {
			return dispatch(addPost(post));
		})
}