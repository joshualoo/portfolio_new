import React from "react";
import Title from "../components/title";
import Navbar from "../components/navbar";
import Portfolioheader from "../components/portfolioheader";
import Bcscacontent from "../components/portfolio/bcsca-content";
import Portfoliofooter from "../components/portfoliofooter";

const Portfoliopage = () => (
	<div>
		<Title />
		<Navbar />
		<Portfolioheader />
		<Bcscacontent />
		<Portfoliofooter />
	</div>
);

export default Portfoliopage;
