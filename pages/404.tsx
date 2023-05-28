import React from "react";
import Layout from "../components/layout";


const Custom404 = () => {
	return (
		<Layout>
			<section className="relative py-12">
				<div className="top-0 flex h-full w-full items-center justify-center ltr:left-0 rtl:right-0">
					<div className="container flex w-full flex-col items-center justify-center space-y-4 px-6 sm:mx-auto lg:px-10">
						<h1 className="text-primary-shade text-9xl font-bold">404</h1>
						<h2 className="text-3xl font-bold">not found</h2>
						<p className="text-xl font-medium">kk</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Custom404;