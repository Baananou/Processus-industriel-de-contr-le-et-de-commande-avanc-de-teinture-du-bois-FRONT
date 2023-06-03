import { Key } from "react";
import Layout from "../components/Layout";

import Link from "next/link";
import { Router } from "next/router";

const Home = () => {
	return (
		<Layout>
			<section className="lg:h-screen flex justify-center items-center p-2">
				<div className="flex flex-col lg:gap-16 gap-2 lg:bg-secondary md:bg-secondary p-24">
					<div className="flex flex-col lg:flex-row md:flex-row lg:gap-16 gap-2  ">
						<div
							className="btn btn-primary cursor-pointer lg:h-24 lg:text-xl text-center"
							onClick={() => (window.location.href = "/accuser")}
						>
							Vue Accés Utilisateur
						</div>
						<div
							className="btn btn-primary cursor-pointer lg:h-24 lg:text-xl text-center"
							onClick={() => (window.location.href = "/gestuser")}
						>
							Vue Gestion d'Utilisateur
						</div>
					</div>
					<div className="flex flex-col lg:flex-row md:flex-row lg:gap-16 gap-2 ">
						<div
							className="btn btn-primary cursor-pointer lg:h-24 lg:w-64 lg:text-xl text-center"
							onClick={() => (window.location.href = "/recette")}
						>
							Vue Recette
						</div>
						<div
							className="btn btn-primary cursor-pointer lg:h-24 lg:w-64 lg:text-xl text-center"
							onClick={() => (window.location.href = "/melangeur")}
						>
							Vue Melangeur
						</div>
						<div
							className="btn btn-primary cursor-pointer lg:h-24 lg:w-64 lg:text-xl text-center"
							onClick={() => (window.location.href = "/colorant")}
						>
							Vue Colorant
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Home;
