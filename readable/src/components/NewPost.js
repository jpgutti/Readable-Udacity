import React, { Component } from 'react'
import '../style/Create.css'
import { connect } from 'react-redux'
import { createPosts } from '../actions/posts'

class NewPost extends Component {

	state = {
		id: "2",
		timestamp: "",
		title: "",
		body: "",
		author: "",
		category: "",
		voteScore: "",
		deleted: false,
		commentCount: 0
	}

	handleEvt = (event) => {
		this.setState({[event.target.name]: event.target.value});
		console.log(this.state)
	}

	createPost = (state) => {
		console.log(state);
		createPosts(this.state);
	}

	render(){
		return (
			<div>
				<div className="PostContainer">
					<h1>Create a new Post</h1>
					<div className="newPost">
						<form>
							<label>
								<h2>Title</h2>
								<input type="text" placeholder="Title" name="title" defaultValue={this.state.title} onChange={this.handleEvt}/>
							</label>
						</form>
						<form>	
							<label>
								<h2>Body</h2>
							</label>
							<textarea className="inputBody" cols="10" rows="4" type="text" onChange={this.handleEvt} name="body"></textarea>
						</form>
						<form>
							<label>
								<h2>Author</h2>
							</label>
								<input className="inputAuthor" type="text" defaultValue={this.state.author} name="author" onChange={this.handleEvt}/>
						</form>
						<input type="submit" name="submit" onClick={() => this.createPost(this.state)}/>
					</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch, action){
	
}

export default connect()(NewPost)