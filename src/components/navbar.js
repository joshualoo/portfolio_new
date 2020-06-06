import React from "react";
import { Link } from "gatsby";

import "./styles/style.scss";

const Navbar = () => (
	<div className="hero-head">
		<nav className="navbar">
			<div className="container center">
				<div className="my-name center">
					<div className="navbar-brand">
						<Link className ="navbar-item" to="/">
							<h1 className="logo-type">joshua loo</h1>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
