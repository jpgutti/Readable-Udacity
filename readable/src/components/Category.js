import React, { Component } from 'react';
import { getPosts } from '../actions/posts';
import { connect } from 'react-redux'

class Category extends Component {

	state = {
      post: []	
	}

	componentWillMount(){
		console.log('Will ', this.props.posts);
	}

	componentDidMount(){
		console.log('Did ', this.props.posts);
		// this.props.posts.map(item => {
		// 	this.setState({post: item.category == this.props.match.params.category})
		// })
	}

	render(){
		console.log('Render', this.props.posts)
		return(
			<div>{this.state.names}</div>
		);
	}
}

function mapStateToProps(store){
	console.log('store', store.posts)
	return {posts : store.posts}
}

export default connect(mapStateToProps)(Category)