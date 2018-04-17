const api = "http://localhost:3001";

let token = localStorage.token;
if(!token)
	token = localStorage.token = Math.random().toString(38).substr(-8);

const headers = {
	'Content-Type' : 'application/json',
	'Authorization' : token
}

export const getCategories = () => 
	fetch(`${api}/categories`, { headers })
		.then(res => res.json())
		.then(data => data.categories)

export const getPost = (category) => 
	fetch(`${api}/${category}/posts`, { headers })
		.then(res => res.json())

export const createPost = (post) => 
	fetch(`${api}/posts`, {
		method: 'POST',
		headers : headers,
		body: JSON.stringify(post)
	})
	.then((res) => {
		console.log(res)
	})

export const getAllPosts = () => 
	fetch(`${api}/posts`, { headers })
		.then(res => res.json())
		.then(function(data){
			return data;
		});

// export const getAllComments = () => 
// 	fetch(`${api}/comment`)

