import React, { Component } from 'react';
import { getPost } from '../utils/Api';

class Category extends Component {

	state = {
		names : ''
	}

	componentDidMount(){
		getPost(this.props.match.params.category).then((res) => {
			console.log(res);
		})
	}

	render(){
		console.log(this.props.match.params.category);
		return(
			<div>{this.state.names}</div>
		);
	}
}

export default Category