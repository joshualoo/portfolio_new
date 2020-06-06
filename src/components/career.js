import React from "react";
import "./styles/style.scss";

const Careersection = () => (
	<div>
		<section className="section career-section">
			<div className="container">
				<h1 className="title">Career</h1>
				<h2 className="subtitle">(where I've been)</h2>
				<div className="columns career-columns is-multiline">
					<div className="column is-one-third">
						<h2 className="company has-text-weight-bold">
							Ballistic Arts Media
						</h2>
						<p>Web Developer</p>
						<p>
							Aug 2019 - <span className="underline">present</span>
						</p>
					</div>
					<div className="column is-one-third">
						<h2 className="company has-text-weight-bold">Evoke Solutions</h2>
						<p class="is-underline">Technical Software Agent</p>
						<p>Mar 2018 - Feb 2019</p>
					</div>

					<div className="column is-one-third">
						<h2 className="company has-text-weight-bold">WittyCookie Inc</h2>
						<p>Web Developer</p>
						<p>Jul 2016 - Mar 2018</p>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Careersection;
