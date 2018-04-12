import React from 'react';
import '../style/cardStyle.css'
import { Link } from 'react-router-dom';

export default function Card ({nome, index}) {
	let nomes = nome.replace(nome[0], nome[0].toUpperCase());
	return(
		<Link to={{pathname: `/${nome}`, query:{name:nomes}}}>
			<div className="container" key={index}>
				<h3 className="title">{nomes}</h3>
			</div>
		</Link>
	)
}