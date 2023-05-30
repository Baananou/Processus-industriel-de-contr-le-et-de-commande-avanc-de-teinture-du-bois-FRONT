import React from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormData {
	password: string;
	role: string;
  }
const Gestuser = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: { password: string; role:string; }) => {
    if ((data.password === "123")&&(data.role ==="admin")) {
      router.push("/adduser");
    } else {
      router.push("/500");
    }
  };

  return (
    <Layout>
      <section className="flex justify-center items-center">
        <section className="w-[1355px] h-[650px] flex justify-center items-center relative my-10">
          <div className="flex flex-col gap-2 lg:bg-secondary md:bg-secondary p-24 items-center">
            <div className="text-2xl font-bold mb-4 underline">
              LOGIN BY INDEX
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
              <div className="mb-4">
                <label htmlFor="role" className="mb-2 font-bold text-gray-700">
                  Role:
                </label>
                <select
                  id="role"
                  {...register("role", { required: true })}
                  className="border border-primary mx-2 px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="guest">Guest</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 font-bold text-primary">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2 "
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Gestuser;
