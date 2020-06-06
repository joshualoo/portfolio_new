import React from "react";
import { Link } from "gatsby";

import hayerLogo from "../../images/portfolio/hayer/logo.png";

import desktop1 from "../../images/portfolio/hayer/desktop1.jpg";
import desktop2 from "../../images/portfolio/hayer/desktop2.jpg";
import desktop3 from "../../images/portfolio/hayer/desktop3.jpg";
import desktop4 from "../../images/portfolio/hayer/desktop4.jpg";

import mobile1 from "../../images/portfolio/hayer/mobile1.jpg";
import mobile2 from "../../images/portfolio/hayer/mobile2.jpg";
import mobile3 from "../../images/portfolio/hayer/mobile3.jpg";

const logoStyle = {
	width: "50%",
};

const Hayercontent = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-vcentered logo-text-columns">
					<div className="column">
						<h1 className="title portfolio-title is-size-1">
							Hayer Builders <br /> Group
						</h1>
					</div>
					<div className="column image-column">
						<img
							src={hayerLogo}
							alt="Hayer Builders Group Logo"
							style={logoStyle}
							className="image"
						/>
					</div>
				</div>

				<hr className="section-divider container" />

				<div className="columns">
					<div className="column"></div>
					<div className="column has-text-centered is-two-thirds">
						<h2 className="subtitle is-size-3">the Brief:</h2>

						<p>
							Hayer Builders Group website refresh.
							<hr className="short-line" />
							Highlighting the many commercial and housing developments done by
							the company.
							<hr className="short-line" />
							Imagery and Typography based brochure site designed to showcase
							present, and upcoming projects.
						</p>
					</div>
					<div className="column"></div>
				</div>

				<hr className="section-divider container" />

				<div className="columns">
					<div className="column">
						<h2 className="subtitle is-size-3">in sentences:</h2>
						<p>
							Built with a custom Wordpress starter theme with Bootstrap.
							<hr className="short-line" />
							Used ACF Pro for different section layouts and reusable content
							modules that can be placed on any page.
							<hr className="short-line" />
							Ran Sass compiler and CSS/JS minifiers with grunt.
						</p>
					</div>

					<div className="column"></div>

					<div className="column">
						<h2 className="subtitle is-size-3">in a list:</h2>
						<ul>
							<li>Wordpress</li>
							<li>ACF Pro (Advanced Custom Fields)</li>
							<li>sass</li>
							<li>grunt</li>
							<li>npm</li>
							<li>git</li>
						</ul>
					</div>
				</div>

				<hr className="section-divider container" />

				<div className="columns portfolio-img__columns">
					<div className="column">
						<img src={desktop3} className="box-shadow" alt="Desktop Page 3" />
						<img src={desktop1} className="box-shadow" alt="Desktop Page 1" />
						<img src={desktop4} className="box-shadow" alt="Desktop Page 4" />
						<img src={desktop2} className="box-shadow" alt="Desktop Page 2" />
					</div>
				</div>

				<div className="columns portfolio-img__column">
					<div className="column has-text-centered">
						<img src={mobile1} className="box-shadow" alt="Mobile Page 1" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile2} className="box-shadow" alt="Mobile Page 2" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile3} className="box-shadow" alt="Mobile Page 3" />
					</div>
				</div>
			</div>
		</section>

		<div className="container links-container">
			<div className="columns is-vcentered is-mobile">
				<div className="column is-one-third-mobile">
					<Link className="link" to="/bcsca">
						{" "}
						&larr; Prev
					</Link>
				</div>

				<div className="column is-one-third-mobile has-text-centered">
					<Link className="link" to="/">
						{" "}
						Home
					</Link>
				</div>

				<div className="column is-one-third-mobile has-text-right">
					<Link className="link" to="/chie-imai">
						{" "}
						Next &rarr;
					</Link>
				</div>
			</div>
		</div>

		<hr className="section-divider container" />
	</div>
);

export default Hayercontent;
