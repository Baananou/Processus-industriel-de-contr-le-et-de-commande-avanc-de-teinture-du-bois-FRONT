import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import ColorantInput from "../components/colorant/colorantInput";
import ColorantDisplay from "../components/colorant/colorantDisplay";
import ColorantBtn from "../components/colorant/colorantBtn";


type Props = {};

const Colorant = (props: Props) => {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <section className="pl-24">
            <div className="absolute top-[15px] left-[670px]">
              <ColorantDisplay child="output" alertKey="MCOL" />

            </div>
            <div className="absolute top-[80px] left-[370px]">
              <ColorantDisplay child="output" alertKey="PCB" />


            </div>
            <div className="absolute top-[160px] left-[370px]">
              <ColorantDisplay child="output" alertKey="PCA" />


            </div>
            <div className="absolute top-[80px] right-[280px]">
              <ColorantDisplay child="output" alertKey="PCC" />
            </div>
            <div className="absolute top-[150px] right-[280px]">
              <ColorantDisplay child="output" alertKey="VCEAU" />
            </div>

            <div className="absolute -bottom-[10px] left-[670px]">
              <ColorantDisplay child="output" alertKey="VVCOL" />
            </div>



            <Image
              src={"/colorant.png"}
              alt={""}
              width={"500"}
              height={"1000"}
            />
          </section>

          <section className="absolute left-10 bottom-10">
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <ColorantDisplay child="output" alertKey="T1C" />
              </div>
              <div className="flex items-center gap-2">
                <ColorantDisplay child="output" alertKey="T2C" />
              </div>
              <div className="flex items-center gap-2">
                <ColorantInput child="input" inputkey="MPQA" />
              </div>
              <div className="flex items-center gap-2">
                <ColorantInput child="input" inputkey="MPQB" />

              </div>
              <div className="flex items-center gap-2">
                <ColorantInput child="input" inputkey="MPQC" />

              </div>
              <div className="flex items-center gap-2">
                <ColorantInput child="input" inputkey="MVOLC" />

              </div>
            </div>
          </section>
          <section className="absolute right-10">
            <div className="flex flex-col items-center gap-2">

              <ColorantBtn child="input" inputKey="N0" />
              <ColorantBtn child="input" inputKey="N1" />
              <ColorantBtn child="input" inputKey="N2" />
            </div>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default Colorant;
