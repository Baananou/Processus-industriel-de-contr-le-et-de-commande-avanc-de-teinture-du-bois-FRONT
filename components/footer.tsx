import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-secondary">
      <div className="container mx-auto px-4 ">
				<div className="flex justify-center">
          <h1 className="text-xl font-bold">Processus industriel de contrôle et de commande avancé de teinture du bois
          </h1>
				</div>
				<div className="flex justify-center my-6">
					<div className="mr-4">
						<Image
							src="/logowaialys.png"
							alt="logo waialys"
							width={80}
							height={80}
						/>
					</div>
					<div>
						<Image src="/logopoly.png" alt="logo poly" width={80} height={80} />
					</div>
				</div>
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-blueGray-500 font-semibold py-1">
							Copyright ©
							<span id="get-current-year">{new Date().getFullYear()}</span>
              <a
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}SAIF HAMDI / WIEM MZALI
              </a>

						</div>
					</div>
				</div>

			</div>
		</footer>
	);
}
