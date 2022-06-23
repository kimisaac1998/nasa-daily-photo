import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound(props) {
	return (
		<div className="notFound">
			<h2>
				Oops! Page not found. Click <Link to='/' className="here">here</Link> to go back home.
			</h2>
			<img
				src='https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ecf05e47be0b97323b1715dd24c755f1d8d5e382314b0d3c&rid=giphy.gif&ct=g'
				alt='404 Not Found'
			/>
		</div>
	);
}

export default NotFound;
