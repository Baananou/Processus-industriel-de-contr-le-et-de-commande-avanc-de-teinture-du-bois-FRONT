import Layout from "../components/Layout";
import MelangeurAlert from "../components/melangeurAlert";

import Image from "next/image";
import { useEffect, useState } from "react";

import sirenOnImage from '../public/siren_on.png';
import sirenOffImage from '../public/siren_off.png';
import axios from "axios";
import Display from "../components/userDisplay";
import Btn from "../components/btn";
import Input from "../components/input";
import BtnDisplay from "../components/btnDisplay";
import MelangeurInput from "../components/melangeurInput";


function Melangeur() {

  return (
    <Layout>

      <section className="flex justify-center items-center">
        <section className="absolute right-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="FP"
              />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="SC"
              />
            </div>

            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="MEC"
              />
            </div>

            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="VEC"
              />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="REC"
              />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="PNET"
              />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert
                child="output"
                alertKey="VNET"
              />
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

            <MelangeurInput child="input" inputkey="MVOL" />

            <MelangeurInput child="input" inputkey="MQP" />
            <MelangeurInput child="input" inputkey="MINS" />
            <MelangeurInput child="input" inputkey="MFONG" />
            <Btn
              deviceLabel="pfe-sw-melangeur-parte2"
              variableLabel="bpnm"
              variableId={"6477db057b06e4000d04e7f9"}
              name={"Nouveau Mélange"} apiToken={process.env.UBIDOTS_API_TOKEN1} />
            <MelangeurInput child="input" inputkey="COK" />

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
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vfong"
                variableId={"6434104bc1a58375d6006c75"}
                name={"Etat EV Fongicide"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
            </div>
            <div className="absolute top-[123px] left-[250px]">
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vins"
                variableId={"6434100fbd7a30f23836e08a"}
                name={"Etat EV Insecticide"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
            </div>

            <div className="absolute top-[123px] right-[205px]">
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="veau"
                variableId={"6477d86949e3e8000e447d21"}
                name={"Etat EV Eau"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
            </div>

            <div className="absolute bottom-[65px] left-[270px]">
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vstt"
                variableId={"6477d8dd9f1655000faa2d8b"}
                name={"Vidange Vers Station Eau"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
            </div>

            <div className="absolute bottom-[30px] left-[620px]">
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="mml"
                variableId={"6477d8c19767af000fbb709f"}
                name={"Etat Moteur"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
            </div>

            <div className="absolute bottom-[65px] right-[300px]">
              {/* <Display
                deviceLabel="pfe-sw-melangeur"
                variableLabel="vcond"
                variableId={"6477d86da6349f000f7c0722"}
                name={"Vidange vers Atelier"} apiToken={process.env.UBIDOTS_API_TOKEN1} /> */}
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
