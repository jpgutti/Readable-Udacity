import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/CategoryCardStyle.css'

export function CategoryCard({post}) {
	console.log(post);
	return(
		<div className="column-display">
			<Link to={`/${post.category}/${post.id}`}>
				<div className="categoryCard">
					<div className="imgDiv">
						<img src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb" className="img" />	
					</div>
					<div className="info">
						<div className="Header">
							<h2>{post.title}</h2>
						</div>
						<div className="Body">
							<p>{post.body}</p>	
						</div>
					</div>
					<div className="">
						<p>{post.author ? post.author : "Anony"}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CategoryCard