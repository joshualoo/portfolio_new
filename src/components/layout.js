import React from "react";

import "./styles/style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Aboutsection from "./about";
import Worksection from "./worksection";
import Careersection from "./career";
import Contactinformation from "./contact";
import Footer from "./footer";

const Layout = ({ children }) => (
	<div>
		<Header />
		<Helmet />
		<hr className="section-divider container" />
		<Aboutsection />
		<hr className="section-divider container" />
		<Worksection />
		<hr className="section-divider container" />
		<Careersection />
		<hr className="section-divider container" />
		<Contactinformation />
		<Footer />
	</div>
);

export default Layout;
