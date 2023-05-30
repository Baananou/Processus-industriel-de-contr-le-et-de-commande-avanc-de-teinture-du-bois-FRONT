import React from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormData {
	nom: string;
	prenom: string;
	poste: string;
	matricule: string;
}
const Adduser = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: {
		nom: string;
		prenom: string;
		poste: string;
		matricule: string;
	}) => {
		if (data) {
			router.push("/adduser");
		} else {
			router.push("/500");
		}
	};

	type Props = {};

	return (
		<Layout>
			<section className="flex justify-center items-center">
				<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
					<div className="flex flex-col gap-2 lg:bg-secondary md:bg-secondary p-24 items-center">
						<div className="flex flex-col gap-2 lg:bg-secondary md:bg-secondary p-24 items-center">
							<div className="text-2xl font-bold mb-4 underline"></div>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="flex flex-col items-end"
							>
								<div className="mb-4">
									<label htmlFor="nom" className="mb-2 font-bold text-primary">
										nom:
									</label>
									<input
										type="nom"
										id="nom"
										{...register("nom", { required: true })}
										className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2 "
										placeholder="Enter nom"
									/>
									{errors.nom && (
										<span className="text-red-500">nom is required</span>
									)}
								</div>
								<div className="mb-4">
									<label
										htmlFor="prenom"
										className="mb-2 font-bold text-primary"
									>
										prenom:
									</label>
									<input
										type="prenom"
										id="prenom"
										{...register("prenom", { required: true })}
										className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2 "
										placeholder="Enter prenom"
									/>
									{errors.prenom && (
										<span className="text-red-500">prenom is required</span>
									)}
								</div>
								<div className="mb-4">
									<label
										htmlFor="poste"
										className="mb-2 font-bold text-primary"
									>
										poste:
									</label>
									<input
										type="poste"
										id="poste"
										{...register("poste", { required: true })}
										className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2 "
										placeholder="Enter poste"
									/>
									{errors.poste && (
										<span className="text-red-500">poste is required</span>
									)}
								</div>
								<div className="mb-4">
									<label
										htmlFor="matricule"
										className="mb-2 font-bold text-primary"
									>
										matricule:
									</label>
									<input
										type="matricule"
										id="matricule"
										{...register("matricule", { required: true })}
										className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2 "
										placeholder="Enter matricule"
									/>
									{errors.matricule && (
										<span className="text-red-500">matricule is required</span>
									)}
								</div>
								<button
									type="submit"
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
								>
									Write
								</button>
							</form>
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

export default Adduser;
