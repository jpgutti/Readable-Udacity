import React from 'react';
import '../style/cardStyle.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Card ({nome, index, voteScore}) {
	let nomes = nome.replace(nome[0], nome[0].toUpperCase());
	return(
		<Link to={{pathname: `/${nome}`, query:{name:nomes}}}>
		<div className="grid-container">	
			<div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover style1">
	        <img src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb" alt="Man with backpack"    
	            className="d-block w-full"/>

			  <div className="px-2 py-2">		

			    <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 style2">
			      {nomes}
			    </h1>

			    <p className="mt-2">
			      Summer is coming to a close just around the corner. But it's not too late to squeeze in another weekend trip &hellip;
			    </p>

			  </div>

			  <a href="#0" className="text-uppercase d-inline-block font-weight-medium lts-2px mb-2 text-center styled-link">
			    Read More
			  </a>
			  <Link to="/addPost">
				<button className="rdn-button">Add</button>
			  </Link>
			</div>
		</div>
		</Link>
	)
}

const mapStateToProps = (state, props) => {
	let votos = null;
	for(var key in state.posts){
		if(state.posts[key].category === props.nome){
			console.log(state.posts[key].voteScore);
			votos = state.posts[key].voteScore;
		} else {
			votos = 0;
		}
	}
	return { voteScore : votos};
}

export default connect(mapStateToProps)(Card)