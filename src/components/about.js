import React from "react";

import "./styles/style.scss";

const Aboutsection = () => (
	<section className="section about-section">
		<div className="container">
			<div className="columns">
				<div className="column" />
				<div className="column is-two-thirds">
					<h1 class="title section-title">About</h1>
					<h2 class="subtitle">(a short blurb)</h2>

					<p>
						I always loved creating, understanding, and figuring out how things
						work.
						<hr className="short-line" />
						Along with all that curiosity, comes problem solving; I see the
						whole development process as a giant puzzle that can be broken down
						into sections, each with its own unique problem to solve.
					</p>
					<hr className="short-line" />
					<p>
						There is definitely an art in writing and organizing code in parts
						that work together to form a fully functional product. I'm always on
						the lookout to improve, in hopes of being uncomfortably challenged
						by the next great "
						<span className="has-text-weight-semibold">puzzle</span>" to solve.
					</p>
					<hr className="short-line" />
					<p>
						I also do a little writing on the side{" "}
						<a
							class="link"
							href="http://www.typeandrefresh.com"
							target="_blank"
							rel="noopener"
						>
							here
						</a>
					</p>
				</div>
				<div className="column" />
			</div>
		</div>
	</section>
);

export default Aboutsection;
