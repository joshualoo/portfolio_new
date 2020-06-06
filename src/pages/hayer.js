import React from "react";
import Title from "../components/title";
import Navbar from "../components/navbar";
import Portfolioheader from "../components/portfolioheader";
import Hayercontent from "../components/portfolio/hayer-content";
import Portfoliofooter from "../components/portfoliofooter";

const Portfoliopage = () => (
	<div>
		<Title />
		<Navbar />
		<Portfolioheader />
		<Hayercontent />
		<Portfoliofooter />
	</div>
);

export default Portfoliopage;
