import React, { Component } from 'react';
import { getPosts } from '../actions/posts';
import { connect } from 'react-redux'

class Category extends Component {

	state = {
      post: []	
	}

	componentWillMount(){
		
	}

	componentDidMount(){
		
	}

	render(){
		console.log(this.state.post)
		return(
			<div>{this.state.names}</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect()(Category)