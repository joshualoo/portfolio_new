import React from "react";
import { Link } from "gatsby";

import bcscaLogo from "../../images/portfolio/bcsca/logo.png";

import desktop1 from "../../images/portfolio/bcsca/desktop1.jpg";
import desktop2 from "../../images/portfolio/bcsca/desktop2.jpg";
import desktop3 from "../../images/portfolio/bcsca/desktop3.jpg";
import desktop4 from "../../images/portfolio/bcsca/desktop4.jpg";
import desktop5 from "../../images/portfolio/bcsca/desktop5.jpg";

import mobile1 from "../../images/portfolio/bcsca/mobile1.jpg";
import mobile2 from "../../images/portfolio/bcsca/mobile2.jpg";
import mobile3 from "../../images/portfolio/bcsca/mobile3.jpg";
import mobile4 from "../../images/portfolio/bcsca/mobile4.jpg";

const logoStyle = {
	width: "40%",
};

const Bcscacontent = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-vcentered logo-text-columns">
					<div className="column">
						<h1 className="title portfolio-title is-size-1">
							BC Shopping Centre
							<br /> Association
						</h1>
					</div>
					<div className="column image-column">
						<img
							src={bcscaLogo}
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
							BC Shopping Centre website refresh
							<hr className="short-line" />
							The main purpose of the refresh was to give a vibrant and
							uplifting look for the association, highlighting events in malls &
							shopping centres around BC.
							<hr className="short-line" />
							Integrates with Chamber Master, a membership management software
							designed for all types of member-oriented associations.
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
						<img src={desktop1} className="box-shadow" alt="Desktop Page 1" />
						<img src={desktop2} className="box-shadow" alt="Desktop Page 2" />
						<img src={desktop3} className="box-shadow" alt="Desktop Page 3" />
						<img src={desktop4} className="box-shadow" alt="Desktop Page 4" />
					</div>
				</div>

				<div className="columns portfolio-img__column">
					<div className="column has-text-centered">
						<img src={mobile1} className="box-shadow" alt="Mobile Page 1" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile4} className="box-shadow" alt="Mobile Page 3" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile2} className="box-shadow" alt="Mobile Page 2" />
					</div>
				</div>
			</div>
		</section>

		<div className="container links-container">
			<div className="columns is-vcentered is-mobile">
				<div className="column is-one-third-mobile">
					<Link className="link" to="/chie-imai">
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
					<Link className="link" to="/hayer">
						{" "}
						Next &rarr;
					</Link>
				</div>
			</div>
		</div>

		<hr className="section-divider container" />
	</div>
);

export default Bcscacontent;
