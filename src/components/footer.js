import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./styles/style.scss";

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
					}
				}
			}
		`}
		render={(data) => (
			<footer className="footer center">
				<div className="content has-text-centered">
					<p className="is-size-7">
						made with lots of typing<br></br> in Vancouver, B.C.
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
