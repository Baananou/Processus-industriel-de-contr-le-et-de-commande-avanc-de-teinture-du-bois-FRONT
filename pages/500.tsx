import React from "react";
import Image from "next/image";
import Layout from "../components/layout";


type Props = {};

const Custom500 = (props: Props) => {
	return (
		<Layout>
			<section className="relative py-12">
				<div className="top-0 flex h-full w-full items-center justify-center ltr:left-0 rtl:right-0">
					<div className="container flex w-full flex-col items-center justify-center space-y-4 px-6 sm:mx-auto lg:px-10">
						<h1 className="text-primary-shade text-9xl font-bold">500</h1>
						<h2 className="text-3xl font-bold">server-error</h2>
						<p className="text-xl font-medium">
							jg
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Custom500;