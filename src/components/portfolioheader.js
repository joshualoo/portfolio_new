import React from "react";
import { Link } from "gatsby";

const Portfolioheader = () => (
	<div>
		<section className="section">
			<div className="container">
				<Link className="link" to="/">
					{" "}
					&larr; Home
				</Link>
			</div>
		</section>
	</div>
);

export default Portfolioheader;
