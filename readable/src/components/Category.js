import React, { Component } from 'react';
import { getPosts } from '../actions/posts';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';

class Category extends Component {

	state = {
      post: []	
	}

	componentWillMount(){
		this.setState({post: this.props.posts})
	}

	componentDidMount(){
		console.log(this.state.post)
	}

	render(){
		let posts = this.state.post;
		return(
			posts.map((p, index) => (
				<CategoryCard post={p} key={index}/>
			))
		);
	}
}

function mapStateToProps(store, props){
	const { posts } = store
	const { category } = props.match.params
	return {
		posts: store.posts.filter(post => post.category === category && post.deleted == false )
	}
}

export default connect(mapStateToProps)(Category)