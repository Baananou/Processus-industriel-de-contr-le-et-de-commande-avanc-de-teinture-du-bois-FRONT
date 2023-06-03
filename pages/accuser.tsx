import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";


type Props = {};

const Accuser = (props: Props) => {
	return (
		<Layout>
			<section className="flex justify-center items-center">
				<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10">
					<div className="flex flex-col gap-2 lg:bg-secondary md:bg-secondary p-24 items-end">
						<div className="flex items-center gap-2">
							<label htmlFor="">Nom :</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								Nom
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Prenom :</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								Prenom
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Poste :</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								Poste
							</button>
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Matricule :</label>
							<button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
								Matricule
							</button>
						</div>
					</div>
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
					</section>
				</section>
			</section>
		</Layout>
	);
};

export default Accuser;
