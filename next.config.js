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
	  UBIDOTS_API_KEY: process.env.UBIDOTS_API_KEY,
	  UBIDOTS_DEVICE_ID: process.env.UBIDOTS_DEVICE_ID,
	  UBIDOTS_API_TOKEN:process.env.UBIDOTS_API_TOKEN,
	  DEVICE_LABEL : process.env.UBIDOTS_DEVICE_LABEL
	},
  };
