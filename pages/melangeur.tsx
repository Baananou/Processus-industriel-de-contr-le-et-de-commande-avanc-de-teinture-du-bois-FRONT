import Layout from "../components/Layout";
import Alert from "../components/alert";

import Image from "next/image";
import { useEffect, useState } from "react";

import sirenOnImage from '../public/siren_on.png';
import sirenOffImage from '../public/siren_off.png';
import axios from "axios";
import Display from "../components/display";
import Btn from "../components/btn";
import Input from "../components/input";
import BtnDisplay from "../components/btnDisplay";


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
                deviceLabel="pfe-sw-melangeur-parte2" // Example device label
                variableLabel="r-e-c" // Example variable label
                variableId={"6477dba29767af000d6d5d20"} // Example variable ID
                name={"Rinçage en Cours"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur-parte2" // Example device label
                variableLabel="pnet" // Example variable label
                variableId={"642e8422f4412c0010238ef6"} // Example variable ID
                name={"Etat Pompe Rincage"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="vnet" // Example variable label
                variableId={"642e846bcc1876000ee2098f"} // Example variable ID
                name={"Etat Electrovanne Arrivée"}
              />
            </div>

          </div>

        </section>
        <section className="absolute left-10">
          <div className="flex flex-col items-end gap-2">
            {/* <div className="flex items-center gap-2">
                <label htmlFor="">C1</label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Entrer valeur"
                />
              </div> */}
            <Input
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="c1" // Example variable label
              variableId={"647b1197d3d80204ed996610"} // Example variable ID
              name={"C1"}
            />
            {/* <div className="flex items-center gap-2">
                <label htmlFor="">C2</label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Entrer valeur"
                />
              </div> */}
            <Input
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="c2" // Example variable label
              variableId={"647b11a03b8a71000e2faad2"} // Example variable ID
              name={"C2"}
            />
            <Btn
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="raz" // Example variable label
              variableId={"647b11a6d3d802000e2d7f8a"} // Example variable ID
              name={"RAZ"}
            />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="t1" // Example variable label
              variableId={"6433ec0cc5d121a0fc8f77b6"} // Example variable ID
              name={"T1"}
            />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="t2" // Example variable label
              variableId={"647b112c463df8000ca0b1d3"} // Example variable ID
              name={"T2"}
            />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3" // Example device label
              variableLabel="t2" // Example variable label
              variableId={"647b118ed3d80204ed99660f"} // Example variable ID
              name={"T3"}
            />

            <Input
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="mvol" // Example variable label
              variableId={"6477db2b5b684c000ebcf7f7"} // Example variable ID
              name={"Volume Mélange"}
            />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="mqp" // Example variable label
              variableId={"6477db347b06e4000b98f82c"} // Example variable ID
              name={"Volume Produit"}
            />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="mins" // Example variable label
              variableId={"6477db3bd9213a000cda6f45"} // Example variable ID
              name={"Volume Insecticide"}
            />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="mfong" // Example variable label
              variableId={"6477db4785d3a8000e164346"} // Example variable ID
              name={"Volume Fongicide "}
            />

            <Btn
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="bpnm" // Example variable label
              variableId={"6477db057b06e4000d04e7f9"} // Example variable ID
              name={"Nouveau Mélange"}
            />
            <Btn
              deviceLabel="pfe-sw-melangeur-parte2" // Example device label
              variableLabel="c-ok" // Example variable label
              variableId={"6477db0ef0b688000b132208"} // Example variable ID
              name={"Carte-OK"}
            />
            {/* <button className="bg-blue-500 text-white px-4 py-2 w-24 rounded">
              C - OK
            </button> */}
          </div>
        </section>
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <section className="pl-24">
            {/* <button className="absolute top-[90px] left-[455px] bg-blue-500 text-white px-4 py-2 rounded">
						fti
            </button> */}
            <div className="absolute top-[90px] left-[455px]">
              <Btn
                deviceLabel="pfe-sw-melangeur-parte2" // Example device label
                variableLabel="fti" // Example variable label
                variableId={"6477db1960526d000c43310c"} // Example variable ID
                name={"FTI"}
              />
            </div>
            {/* <button className="absolute top-[215px] left-[455px] bg-blue-500 text-white px-4 py-2 rounded">
              ftf
            </button> */}
            <div className="absolute top-[215px] left-[455px]">
              <Btn
                deviceLabel="pfe-sw-melangeur-parte2" // Example device label
                variableLabel="ftf" // Example variable label
                variableId={"6477db2149e3e8000f8448b0"} // Example variable ID
                name={"FTF"}
              />
            </div>
            {/* <button className="absolute top-[183px] left-[275px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
            </button> */}
            <div className="absolute top-[183px] left-[258px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="vfong" // Example variable label
                variableId={"6434104bc1a58375d6006c75"} // Example variable ID
                name={"Etat EV Fongicide"}
              />
            </div>
            <div className="absolute top-[123px] left-[250px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="vins" // Example variable label
                variableId={"6434100fbd7a30f23836e08a"} // Example variable ID
                name={"Etat EV Insecticide"}
              />
            </div>
            {/* <button className="absolute top-[123px] left-[275px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button> */}
            <div className="absolute top-[123px] right-[205px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="veau" // Example variable label
                variableId={"6477d86949e3e8000e447d21"} // Example variable ID
                name={"Etat EV Eau"}
              />
            </div>
            {/* <button className="absolute top-[123px] right-[180px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button
					</button> */}
            {/* <button className="absolute bottom-[65px] left-[350px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Display Button 1
            </button> */}
            <div className="absolute bottom-[65px] left-[270px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="vstt" // Example variable label
                variableId={"6477d8dd9f1655000faa2d8b"} // Example variable ID
                name={"Vidange Vers Station Eau"}
              />
            </div>
            {/* <button className="absolute bottom-[30px] left-[610px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
						Display Button 2
					</button> */}
            <div className="absolute bottom-[30px] left-[620px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="mml" // Example variable label
                variableId={"6477d8c19767af000fbb709f"} // Example variable ID
                name={"Etat Moteur"}
              />
            </div>
            {/* <button className="absolute bottom-[65px] right-[340px] bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Display Button 3
            </button> */}
            <div className="absolute bottom-[65px] right-[300px]">
              <Display
                deviceLabel="pfe-sw-melangeur" // Example device label
                variableLabel="vcond" // Example variable label
                variableId={"6477d86da6349f000f7c0722"} // Example variable ID
                name={"Vidange vers Atelier"}
              />
            </div>
            <Image
              src={"/melangeur.png"}
              alt={""}
              width={"600"}
              height={"1000"}
            />
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
