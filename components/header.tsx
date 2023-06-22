import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-secondary ">
				<div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex lg:flex-row justify-between lg:w-auto lg:static lg:block lg:justify-start gap-4">
            <Link passHref href="/" className="m-4 font-bold uppercase">
              SAIF HAMDI / WIEM MZALI
            </Link>
            <Link passHref href="/melangeur" className="m-4 font-bold uppercase">
              Mélangeur
            </Link>
            <Link passHref href="/colorant" className="m-4 font-bold uppercase">
              Colorant
            </Link>
            <Link passHref href="/recette" className="m-4 font-bold uppercase">
              Recette
            </Link>
            <Link passHref href="/accuser" className="m-4 font-bold uppercase">
              Vue Accés Utilisateur
            </Link>
            <Link passHref href="/gestuser" className="m-4 font-bold uppercase">
              Vue Gestion d'Utilisateur
            </Link>
						<button
							className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center gap-2">
							<li className="nav-item flex gap-2">
								<Image
									src={"/logowaialys.png"}
									alt={"logo waialys"}
									width={80}
									height={80}
								/>
								<Image
									src={"/logopoly.png"}
									alt={"logo poly"}
									width={80}
									height={80}
								/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
