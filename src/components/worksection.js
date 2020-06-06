import React from "react";
import { Link } from "gatsby";

import { FaSass, FaHtml5, FaReact } from "react-icons/fa";

import "./styles/style.scss";

const Worksection = () => (
	<div>
		<section className="section work-section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<h1 className="title">Work</h1>
						<h2 className="subtitle">(what I did)</h2>
					</div>
				</div>
				<div className="columns is-multiline">
					<div className="column work-column is-half">
						<article className="work">
							<Link to="/hayer">
								<div className="work-content">
									<div className="content">
										<h2 class="work-link line">
											01. <span>Hayer Builders Group</span>
										</h2>
									</div>
								</div>
							</Link>
						</article>
					</div>
					<div className="column work-column is-half">
						<article className="work">
							<Link to="/chie-imai">
								<div className="work-content">
									<div className="content">
										<h2 class="work-link">
											02. <span>Chie Imai</span>
										</h2>
									</div>
								</div>
							</Link>
						</article>
					</div>
					<div className="column work-column is-half">
						<article className="work">
							<Link to="/bcsca">
								<div className="work-content">
									<div className="content">
										<h2 class="work-link">
											03. <span>BC Shopping Centre Association</span>
										</h2>
									</div>
								</div>
							</Link>
						</article>
					</div>
					{/* <div className="column work-column is-half">
						<article className="work">
							<Link to="/bcsca">
								<div className="work-content">
									<div className="content">
										<h2 class="work-link">
											04. <span>????</span>
										</h2>
									</div>
								</div>
							</Link>
						</article>
					</div> */}
				</div>
			</div>
		</section>
	</div>
);

export default Worksection;
