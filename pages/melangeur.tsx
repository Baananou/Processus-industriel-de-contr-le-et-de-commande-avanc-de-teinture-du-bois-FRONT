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
  const API_KEY = process.env.UBIDOTS_API_TOKEN1;
  const test = true;
  const [variableValues, setVariableValues] = useState({});


  return (
    <Layout>

      <section className="flex justify-center items-center">
        <section className="absolute right-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur"
                variableLabel="f-p"
                variableId={"6477d8f060526d000c43310b"}
                name={"Fin Production"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur"
                variableLabel="s-c"
                variableId={"6477d8f42f318a000da846da"}
                name={"Carte Scannée"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur"
                variableLabel="m-e-c"
                variableId={"6477d9177b06e4000b98f82b"}
                name={"Mélange en cours"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur"
                variableLabel="v-e-c"
                variableId={"6477d926e78fd0000c8a2627"}
                name={"Vidange en Cours"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur-parte2"
                variableLabel="r-e-c"
                variableId={"6477dba29767af000d6d5d20"}
                name={"Rinçage en Cours"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur-parte2"
                variableLabel="pnet"
                variableId={"642e8422f4412c0010238ef6"}
                name={"Etat Pompe Rincage"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <div className="flex flex-col items-center ">
              <Alert
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vnet"
                variableId={"642e846bcc1876000ee2098f"}
                name={"Etat Electrovanne Arrivée"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

          </div>

        </section>
        <section className="absolute left-10">
          <div className="flex flex-col items-end gap-2">

            <Input
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="c1"
              variableId={"647b1197d3d80204ed996610"}
              name={"C1"} apiToken={process.env.UBIDOTS_API_TOKEN1} />

            <Input
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="c2"
              variableId={"647b11a03b8a71000e2faad2"}
              name={"C2"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <Btn
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="raz"
              variableId={"647b11a6d3d802000e2d7f8a"}
              name={"RAZ"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="t1"
              variableId={"6433ec0cc5d121a0fc8f77b6"}
              name={"T1"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="t2"
              variableId={"647b112c463df8000ca0b1d3"}
              name={"T2"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <BtnDisplay
              deviceLabel="pfe-sw-melangeur-parte3"
              variableLabel="t2"
              variableId={"647b118ed3d80204ed99660f"}
              name={"T3"} apiToken={process.env.UBIDOTS_API_TOKEN1} />

            <Input
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="mvol"
              variableId={"6477db2b5b684c000ebcf7f7"}
              name={"Volume Mélange"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="mqp"
              variableId={"6477db347b06e4000b98f82c"}
              name={"Volume Produit"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="mins"
              variableId={"6477db3bd9213a000cda6f45"}
              name={"Volume Insecticide"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <Input
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="mfong"
              variableId={"6477db4785d3a8000e164346"}
              name={"Volume Fongicide "} apiToken={process.env.UBIDOTS_API_TOKEN1} />

            <Btn
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="bpnm"
              variableId={"6477db057b06e4000d04e7f9"}
              name={"Nouveau Mélange"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <Btn
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="c-ok"
              variableId={"6477db0ef0b688000b132208"}
              name={"Carte-OK"} apiToken={process.env.UBIDOTS_API_TOKEN1} />

          </div>
        </section>
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <section className="pl-24">

            <div className="absolute top-[90px] left-[455px]">
              <Btn
                deviceLabel="pfe-sw-melangeur-parte2"
                variableLabel="fti"
                variableId={"6477db1960526d000c43310c"}
                name={"FTI"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute top-[215px] left-[455px]">
              <Btn
                deviceLabel="pfe-sw-melangeur-parte2"
                variableLabel="ftf"
                variableId={"6477db2149e3e8000f8448b0"}
                name={"FTF"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute top-[183px] left-[258px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vfong"
                variableId={"6434104bc1a58375d6006c75"}
                name={"Etat EV Fongicide"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <div className="absolute top-[123px] left-[250px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vins"
                variableId={"6434100fbd7a30f23836e08a"}
                name={"Etat EV Insecticide"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute top-[123px] right-[205px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="veau"
                variableId={"6477d86949e3e8000e447d21"}
                name={"Etat EV Eau"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute bottom-[65px] left-[270px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vstt"
                variableId={"6477d8dd9f1655000faa2d8b"}
                name={"Vidange Vers Station Eau"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute bottom-[30px] left-[620px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="mml"
                variableId={"6477d8c19767af000fbb709f"}
                name={"Etat Moteur"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>

            <div className="absolute bottom-[65px] right-[300px]">
              <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vcond"
                variableId={"6477d86da6349f000f7c0722"}
                name={"Vidange vers Atelier"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            </div>
            <Image
              src={"/melangeur.png"}
              alt={""}
              width={"600"}
              height={"1000"}
            />
          </section>
        </section>
      </section>
    </Layout>
  );
}

export default Melangeur;
