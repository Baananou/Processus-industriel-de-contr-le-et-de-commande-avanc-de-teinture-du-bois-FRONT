import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const Contact: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<Layout>
				<section className="bg-secondary-tint">
					<div className="flex flex-col gap-4 lg:flex-row">
						<div className="flex w-full flex-col items-center gap-16 bg-secondary-tint p-12 font-black text-primary">
							<p className="mx-auto w-1/2"></p>
							<div className="flex flex-col gap-2 text-center">
								<div>+216 12 123 123</div>

								<div>test@gmail.com</div>

								<div>test@polytechnicien.tn</div>
							</div>

							<div className="flex flex-col items-center justify-center gap-2">
								<div className="flex gap-2">
									<i className="fab fa-facebook text-lg leading-lg text-primary opacity-75"></i>

									<a
										href="https://www.facebook.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										Facebook
									</a>
								</div>
								<div className="flex gap-2">
									<i className="fab fa-instagram text-lg leading-lg text-primary opacity-75"></i>

									<a
										href="https://instagram.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										Instagram
									</a>
								</div>
							</div>
						</div>
						{/* <div className="h-full w-full bg-primary py-6 px-12 lg:w-1/2">
							<h1 className="mb-4 text-4xl font-extrabold text-secondary-tint lg:mb-6 lg:text-5xl">
								Contact ME
							</h1>

							<form className="flex w-full flex-col gap-2 text-xs text-secondary-tint">
								<label className="flex flex-col gap-2 ">
									<h3 className="text-lg">Full Name *</h3>
									<input type="text" id="fullName" className="rounded-none " />
								</label>
								<label className="flex flex-col gap-2 ">
									<h3 className="text-lg">Email*</h3>
									<input type="email" id="email" className="rounded-none " />
								</label>
								<label className="flex flex-col gap-2  ">
									<h3 className="text-lg">Topic*</h3>
									<input
										type="text"
										id="topic"
										className="rounded-none "
										// {...register("topic", {
										// 	required: t("validation:fill-all-fields"),
										// })}
									/>
								</label>

								<label className="flex flex-col gap-2  ">
									<h3 className="text-lg">Letter*</h3>
									<textarea
										className="h-40 rounded-none border "
										name="letter"
									/>
								</label>

								<button
									className="btn btn-secondary-tint  w-full py-4 text-xl"
									type="submit"
								>
									Send
								</button>
							</form>
						</div> */}
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Contact;
