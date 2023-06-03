/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: "standalone",
	images: {
		domains: [
			"images.unsplash.com",
			"res.cloudinary.com",
		],
	},
};

module.exports = nextConfig;
module.exports = {
	env: {
		UBIDOTS_API_TOKEN1: process.env.UBIDOTS_API_TOKEN1,
		UBIDOTS_API_TOKEN2: process.env.UBIDOTS_API_TOKEN2,
	},
};
