/** @type {import('next').NextConfig} */
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
