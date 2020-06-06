import React from "react";
import Title from "../components/title";
import Navbar from "../components/navbar";
import Portfolioheader from "../components/portfolioheader";
import Chieimaicontent from "../components/portfolio/chie-imai-content";
import Portfoliofooter from "../components/portfoliofooter";

const Portfoliopage = ({ children }) => (
	<div>
		<Title />
		<Navbar />
		<Portfolioheader />
		<Chieimaicontent />
		<Portfoliofooter />
	</div>
);

export default Portfoliopage;
