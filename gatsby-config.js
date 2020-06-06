module.exports = {
	siteMetadata: {
		title: "joshua loo - home",
		author: "Joshua Loo",
		imageUrl: "",
		description: "joshua's portfolio site. a Web Developer",
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, React, Gatsby, CSS3, HTML5, Vancouver, BC`,

		siteUrl: `https://www.joshualoo.ca`,
	},
	// pathPrefix: `/`,
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Makefolio",
				short_name: "Makefolio",
				start_url: "/",
				background_color: "#2980b9",
				theme_color: "#2980b9",
				display: "standalone",
				icon: "src/images/favicon.jpg",
				orientation: "portrait",
			},
		},
	],
};
