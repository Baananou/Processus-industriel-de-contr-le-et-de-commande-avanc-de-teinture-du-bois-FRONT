import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import InputColor from "../components/inputColor";
import RecetteInput from "../components/recetteInput";

type Props = {};

const Recette = (props: Props) => {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <div className="flex flex-col lg:gap-16 gap-2 lg:bg-secondary md:bg-secondary p-24">
            <div className="flex flex-col lg:flex-row md:flex-row lg:gap-16 gap-2 ">
              <RecetteInput child="input" inputkey="COLORANT1" />
              <RecetteInput child="input" inputkey="COLORANT2" />

              <RecetteInput child="input" inputkey="COLORANT3" />

            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Recette;
