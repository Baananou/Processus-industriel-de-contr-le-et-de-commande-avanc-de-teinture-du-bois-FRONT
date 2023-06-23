import Layout from "../components/Layout";
import MelangeurAlert from "../components/melangeur/melangeurAlert";
import Image from "next/image";
import MelangeurInput from "../components/melangeur/melangeurInput";
import MelangeurDisplay from "../components/melangeur/melangeurDisplay";
import MelangeurBtn from "../components/melangeur/mealngeurBtn";

function Melangeur() {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <section className="absolute right-32">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="FP" />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="SC" />
            </div>

            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="MEC" />
            </div>

            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="VEC" />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="REC" />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="PNET" />
            </div>
            <div className="flex flex-col items-center ">
              <MelangeurAlert child="output" alertKey="VNET" />
            </div>
          </div>
        </section>
        <section className="absolute left-20">
          <div className="flex flex-col items-end gap-2">
            <MelangeurDisplay alertKey="C1" child="output" />
            <MelangeurDisplay alertKey="C2" child="output" />

            <MelangeurBtn child="input" inputKey="RAZ" />

            <MelangeurDisplay alertKey="T1" child="output" />
            <MelangeurDisplay alertKey="T2" child="output" />
            <MelangeurDisplay alertKey="T3" child="output" />
            <MelangeurInput child="input" inputkey="MVOL" />
            <MelangeurInput child="input" inputkey="MQP" />
            <MelangeurInput child="input" inputkey="MINS" />
            <MelangeurInput child="input" inputkey="MFONG" />

            <MelangeurBtn child="input" inputKey="COK" />
            <MelangeurBtn child="input" inputKey="BPNM" />
          </div>
        </section>
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10 ">
          <section className="pl-24">
            <div className="absolute top-[90px] left-[440px]">
              <MelangeurBtn child="input" inputKey="FTI" />
            </div>

            <div className="absolute top-[215px] left-[440px]">
              <MelangeurBtn child="input" inputKey="FTF" />
            </div>

            <div className="absolute top-[183px] left-[300px]">
              <MelangeurDisplay alertKey="VFONG" child="output" />
            </div>
            <div className="absolute top-[123px] left-[320px]">
              <MelangeurDisplay alertKey="VINS" child="output" />
            </div>

            <div className="absolute top-[123px] right-[220px]">
              <MelangeurDisplay alertKey="VEAU" child="output" />
            </div>

            <div className="absolute bottom-[65px] left-[390px]">
              <MelangeurDisplay alertKey="VSTT" child="output" />
            </div>

            <div className="absolute bottom-[30px] left-[635px]">
              <MelangeurDisplay alertKey="MML" child="output" />
            </div>

            <div className="absolute bottom-[65px] right-[360px]">
              <MelangeurDisplay alertKey="VCOND" child="output" />
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
