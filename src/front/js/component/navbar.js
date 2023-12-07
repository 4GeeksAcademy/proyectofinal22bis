import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">probando un cambio para subirlo al repo</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-dark">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
