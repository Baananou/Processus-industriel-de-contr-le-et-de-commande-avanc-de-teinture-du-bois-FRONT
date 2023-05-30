import React from "react";
import Image from "next/image";
import Layout from "../components/layout";

type Props = {};

const Colorant = (props: Props) => {
	return (
		<Layout>
			<section className="flex justify-center items-center">
				<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
					<section className="pl-24">
						<button className="absolute top-[15px] left-[655px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>
						<button className="absolute top-[80px] left-[325px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>
						<button className="absolute top-[160px] left-[325px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>
						<button className="absolute top-[80px] right-[230px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>
						<button className="absolute top-[150px] right-[245px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>

						<button className="absolute -bottom-[10px] left-[655px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Display Button
						</button>

						<Image
							src={"/colorant.png"}
							alt={""}
							width={"500"}
							height={"1000"}
						/>
					</section>

					<section className="absolute left-10 bottom-10">
						<div className="flex flex-col items-end gap-2">
						<div className="flex items-center gap-2">
								<label htmlFor="">TC1</label>
								<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
									TC1
								</button>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">TC2</label>
								<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
									TC2
								</button>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">MPQA</label>
								<input
									type="text"
									className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Entrer valeur"
								/>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">MPQB</label>
								<input
									type="text"
									className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Entrer valeur"
								/>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">MPQC</label>
								<input
									type="text"
									className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Entrer valeur"
								/>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">MVOLC</label>
								<input
									type="text"
									className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Entrer valeur"
								/>
							</div>
						</div>
					</section>
					{/* <section className="absolute left-10 top-10">
						<div className="flex flex-col items-start gap-2">
							<div className="flex items-center gap-2">
								<label htmlFor="">TC1</label>
								<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
									TC1
								</button>
							</div>
							<div className="flex items-center gap-2">
								<label htmlFor="">TC2</label>
								<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
									TC2
								</button>
							</div>
						</div>
					</section> */}
					<section className="absolute right-10">
						<div className="flex flex-col items-center gap-2">
							<button className=" bg-blue-500 text-white font-bold py-2 px-4 w-24 rounded">
								N0
							</button>
							<button className=" bg-blue-500 text-white font-bold py-2 px-4 w-24 rounded">
								N1
							</button>
							<button className=" bg-blue-500 text-white font-bold py-2 px-4 w-24 rounded">
								N2
							</button>
						</div>
					</section>
				</section>
			</section>
		</Layout>
	);
};

export default Colorant;
