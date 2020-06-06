import React from "React";
import "./styles/style.scss";
import resume from "../images/resume/joshua-loo-resume.pdf";

const Contactinformation = () => (
	<section className="contact-row section">
		<div className="container">
			<div className="columns">
				<div className="column is-full-desktop is-three-quarters-tablet is-full-mobile">
					<a
						className="link"
						href="mailto:joshua.loo.kc@gmail.com"
						target="_blank"
					>
						Email
					</a>
					{""}
				</div>
				<div className="column is-full-desktop is-three-quarters-tablet is-full-mobile">
					<a
						className="link"
						href="https://www.linkedin.com/in/joshua-loo-kc/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Linkedin
					</a>
					{""}
				</div>
				<div className="column is-full-desktop is-three-quarters-tablet is-full-mobile">
					<a
						className="link"
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default Contactinformation;
