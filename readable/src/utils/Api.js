const api = "http://localhost:3001";

const token = 1;

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
		.then(data => data.voteScore)

