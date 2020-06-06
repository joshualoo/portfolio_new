import React from "react";
import { Link } from "gatsby";

//imgs -- figure out how to use graphql instead later?
import chieLogo from "../../images/portfolio/chie/chie-logo.png";
import homepage from "../../images/portfolio/chie/homepage.jpg";
import homepage2 from "../../images/portfolio/chie/homepage-2.jpg";
import designer from "../../images/portfolio/chie/designer.jpg";

// import profileMobile from "../../images/portfolio/chie/profile-mobile.jpg";
import servicesMobile from "../../images/portfolio/chie/services-mobile.jpg";
import cartMobile from "../../images/portfolio/chie/cart-mobile.jpg";

// import mobile4 from "../../images/portfolio/chie/mobile-4.jpg";
// import mobile5 from "../../images/portfolio/chie/mobile-5.jpg";
import mobile6 from "../../images/portfolio/chie/mobile-6.jpg";

const logoStyle = {
	alignSelf: "center",
	width: "50%",
};

const Chieimaicontent = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-vcentered logo-text-columns">
					<div className="column">
						<h1 className="title portfolio-title is-size-1">Chie Imai</h1>
					</div>
					<div className="column image-column">
						<img
							src={chieLogo}
							alt="Chie Imai Logo"
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
							A refresh of their previous website with a revamped design. In
							addition to that, there was a need to market their products to the
							North American market, which were a part of their longstanding
							expansion plans.
							<hr className="short-line" />
							What we achieved together in the end was a bilingual website in
							both Japanese and English, a handful of custom made pages that
							highlighted their rich history and products and a fully functional
							e-commerce site.
						</p>
					</div>
					<div className="column"></div>
				</div>

				<hr className="section-divider container" />

				<div className="columns">
					<div className="column">
						<h2 className="subtitle is-size-3">in sentences:</h2>
						<p>
							Built with Wordpress.
							<hr className="short-line" />
							Used ACF to manage the career applications page.
							<hr className="short-line" />
							Customized Polylang and Woocommerce to ensure a consistent
							experience throughout both languages.
						</p>
					</div>

					<div className="column"></div>

					<div className="column">
						<h2 className="subtitle is-size-3">in a list:</h2>
						<ul>
							<li>Wordpress</li>
							<li>ACF (Advanced Custom Fields)</li>
							<li>Woocommerce</li>
							<li>Polylang</li>
						</ul>
					</div>
				</div>
				<hr className="section-divider container" />

				<div className="columns portfolio-img__columns">
					<div className="column">
						<img src={homepage} className="box-shadow" alt="Desktop Homepage" />
						<img
							src={homepage2}
							className="box-shadow"
							alt="Desktop Homepage 2"
						/>
						<img src={designer} className="box-shadow" alt="Designer Page" />
					</div>
				</div>

				<div className="columns portfolio-img__column">
					<div className="column has-text-centered">
						<img
							src={servicesMobile}
							className="box-shadow"
							alt="Services Page"
						/>
					</div>
					<div className="column has-text-centered">
						<img src={cartMobile} className="box-shadow" alt="Cart Page" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile6} className="box-shadow" alt="Mobile Page 6" />
					</div>
				</div>
			</div>
		</section>

		<div className="container links-container">
			<div className="columns is-vcentered is-mobile">
				<div className="column is-one-third-mobile">
					<Link className="link" to="/hayer">
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
					<Link className="link" to="/bcsca">
						{" "}
						Next &rarr;
					</Link>
				</div>
			</div>
		</div>

		<hr className="section-divider container" />
	</div>
);

export default Chieimaicontent;
console.log(homepage);
