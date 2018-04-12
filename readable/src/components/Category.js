import React, { Component } from 'react';
// import { getPost } from './utils/Api'

class Category extends Component {

	state = {
		names : ''
	}

	componentDidMount(){

	}

	render(){
		console.log(this.props.match);
		return(
			<div>{this.state.names}</div>
		);
	}
}

export default Category