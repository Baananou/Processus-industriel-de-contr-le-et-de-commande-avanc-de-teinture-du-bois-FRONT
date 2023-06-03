import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import InputColor from "../components/inputColor";

type Props = {};

const Recette = (props: Props) => {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <div className="flex flex-col lg:gap-16 gap-2 lg:bg-secondary md:bg-secondary p-24">
            <div className="flex flex-col lg:flex-row md:flex-row lg:gap-16 gap-2 ">
              <InputColor
                deviceLabel="pfe-sw-melangeur-parte3"
                variableLabel="colorant-a"
                variableId={"647b11d47a8606000df0ce6a"}
                name={"Red"}
                color="red"
                apiToken={process.env.UBIDOTS_API_TOKEN1}
              />
              <InputColor
                deviceLabel="pfe-sw-melangeur-parte3"
                variableLabel="colorant-b"
                variableId={"647b11e6463df8000b2ddf89"}
                name={"Green"}
                color="green"
                apiToken={process.env.UBIDOTS_API_TOKEN1}
              />
              <InputColor
                deviceLabel="pfe-sw-melangeur-parte3"
                variableLabel="colorant-c"
                variableId={"647b11ee6b6512000c0f5307"}
                name={"Blue"}
                color="blue"
                apiToken={process.env.UBIDOTS_API_TOKEN1}
              />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Recette;
