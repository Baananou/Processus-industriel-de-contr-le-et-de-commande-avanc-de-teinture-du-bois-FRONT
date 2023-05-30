import VariableData from "../components/VariableData";
import VariableValue from "../components/VariableValue";
import Layout from "../components/layout";
import Image from "next/image";

function Melangeur() {
	return (
		<Layout>
			<section className="flex justify-center items-center">
			<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
				<section className="pl-24">
					<button className="absolute top-[90px] left-[455px] bg-blue-500 text-white px-4 py-2 rounded">
						fti
					</button>
					<button className="absolute top-[215px] left-[455px] bg-blue-500 text-white px-4 py-2 rounded">
						ftf
					</button>
					<button className="absolute top-[183px] left-[275px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<button className="absolute top-[123px] left-[275px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<button className="absolute top-[123px] right-[180px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<button className="absolute bottom-[30px] left-[610px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<button className="absolute bottom-[65px] left-[350px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<button className="absolute bottom-[65px] right-[340px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button>
					<Image
						src={"/melangeur.png"}
						alt={""}
						width={"600"}
						height={"1000"}
					/>
				</section>

				<section className="absolute right-10">
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">!</span>
						</div>
						<div>test</div>
					</div>
				</section>
				<section className="absolute left-10 bottom-10">
					<div className="flex flex-col items-end gap-2">
					<div className="flex items-center gap-2">
							<label htmlFor="">C1</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">C2</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<button className="bg-blue-500 text-white px-4 py-2 w-24  rounded">
							RAZ
						</button>
						<div className="flex items-center gap-2">
							<label htmlFor="">T1</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								T1
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">T2</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								T2
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">T3</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								T3
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">MVOL</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">MQP</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">MINS</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">MFONG</label>
							<input
								type="text"
								className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
								placeholder="Entrer valeur"
							/>
						</div>
						<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
							BPNM
						</button>
						<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
							C - OK
						</button>
					</div>
				</section>
				{/* <section className="absolute left-10 top-10">
					<div className="flex flex-col items-end gap-2">
						
					</div>
				</section> */}
			</section>
			</section>
		</Layout>
	);
}

export default Melangeur;
