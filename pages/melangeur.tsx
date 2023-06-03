import Layout from "../components/Layout";
import Alert from "../components/alert";

import Image from "next/image";
import { useEffect, useState } from "react";

import sirenOnImage from '../public/siren_on.png';
import sirenOffImage from '../public/siren_off.png';
import axios from "axios";


function Melangeur() {
  const API_KEY = process.env.UBIDOTS_API_TOKEN;
  const test = true;
  const [variableValues, setVariableValues] = useState({});


	return (
    <Layout>

      <section className="flex justify-center items-center">
        <section className="absolute right-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="f-p" // Example variable label
                variableId={"6477d8f060526d000c43310b"} // Example variable ID
                name={"Fin Production"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="s-c" // Example variable label
                variableId={"6477d8f42f318a000da846da"} // Example variable ID
                name={"Carte Scannée"}
              />
            </div>

            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="m-e-c" // Example variable label
                variableId={"6477d9177b06e4000b98f82b"} // Example variable ID
                name={"Mélange en cours"}
              />
            </div>

            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="v-e-c" // Example variable label
                variableId={"6477d926e78fd0000c8a2627"} // Example variable ID
                name={"Vidange en Cours"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="r-e-c" // Example variable label
                variableId={"6477dba29767af000d6d5d20"} // Example variable ID
                name={"Rinçage en Cours"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="pnet" // Example variable label
                variableId={"642e8422f4412c0010238ef6"} // Example variable ID
                name={"Etat Pompe Rincage"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="r-e-c" // Example variable label
                variableId={"642e846bcc1876000ee2098f"} // Example variable ID
                name={"Etat Electrovanne Arrivée eau"}
              />
            </div>
          </div>

        </section>
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
