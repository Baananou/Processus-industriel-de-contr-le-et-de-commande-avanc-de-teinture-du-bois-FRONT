import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import UserDisplay from '../components/userDisplay';
import UserAlert from "../components/user/userAlert";



type Props = {};

const Accuser = (props: Props) => {
	return (
		<Layout>
			<section className="flex justify-center items-center">
				<section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10">
					<div className="flex flex-col gap-2 lg:bg-secondary md:bg-secondary p-24 items-end">
						<div className="flex items-center gap-2">
							<label htmlFor="">Nom :</label>
              <UserDisplay child="READ" alertKey="nom" />
						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Prenom :</label>
              <UserDisplay child="READ" alertKey="prenom" />

						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Poste :</label>
              <UserDisplay child="READ" alertKey="poste" />

						</div>
						<div className="flex items-center gap-2">
							<label htmlFor="">Matricule :</label>
              <UserDisplay child="READ" alertKey="matricule" />

						</div>
					</div>
          <section className="absolute right-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center ">
                <UserAlert
                  child="READ"
                  alertKey="done"
                />
              </div>
              <div className="flex flex-col items-center ">
                <UserAlert
                  child="READ"
                  alertKey="error"
                />
              </div>

              <div className="flex flex-col items-center ">
                <UserAlert
                  child="READ"
                  alertKey="presence"
                />
              </div>
            </div>

          </section>
				</section>
			</section>
		</Layout>
	);
};

export default Accuser;
