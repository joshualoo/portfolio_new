import React from "react";
import Navbar from "./navbar";

import "./styles/style.scss";

const Header = () => (
	<section id="hero" className="hero">
		<Navbar />
		<div className="hero-body">
			<div className="container left">
				<article className="text">
					<div className="columns is-vcentered">
						<div className="content column">
							<h1 className="big-title big-title_left">
								Hello <span id="there">There</span>
							</h1>
						</div>
						<div className="content column " />
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
