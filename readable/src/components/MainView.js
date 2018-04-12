import React, { Component } from 'react'
import Card from './Card'

class MainView extends Component {

	render(){
		let lista = this.props.arr;
		return (
			lista.map((l, i) => (
				<Card nome={l.name} index={i}/>
			))
		);
	}
}

export default MainView;