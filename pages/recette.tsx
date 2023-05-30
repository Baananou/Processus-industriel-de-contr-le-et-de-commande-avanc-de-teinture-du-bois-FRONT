import React from "react";
import Layout from "../components/layout";
import Image from "next/image";

type Props = {};

const Recette = (props: Props) => {
	return (
		<Layout>
			<section className="flex justify-center items-center">
				<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
					<div className="flex flex-col lg:gap-16 gap-2 lg:bg-secondary md:bg-secondary p-24">
						<div className="flex flex-col lg:flex-row md:flex-row lg:gap-16 gap-2 ">
							<div className="flex flex-col gap-4 items-center">
								<label htmlFor="redInput" className="text-red-500 text-2xl font-bold">
									Red
								</label>
								<input
									id="redInput"
									type="text"
									className="border border-red-500 px-4 py-2 rounded-md focus:outline-none focus:border-red-500"
									placeholder="Enter value"
								/>
							</div>
							<div className="flex flex-col gap-4 items-center">
								<label htmlFor="greenInput" className="text-green-500 text-2xl font-bold">
									Green
								</label>
								<input
									id="greenInput"
									type="text"
									className="border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
									placeholder="Enter value"
								/>
							</div>
							<div className="flex flex-col gap-4 items-center">
								<label htmlFor="blueInput" className="text-blue-500 text-2xl font-bold">
									Blue
								</label>
								<input
									id="blueInput"
									type="text"
									className="border border-blue-500 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Enter value"
								/>
							</div>
						</div>
					</div>
				</section>
			</section>
		</Layout>
	);
};

export default Recette;
