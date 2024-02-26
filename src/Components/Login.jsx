import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="h-screen bg-black bg-opacity-90 flex justify-center items-center flex-col ">
        <h1 className="font-bold text-white">Login</h1>

        <form
          className="flex flex-col text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name  */}
          {errors.name && (
            <span className="text-red-900">{errors.name.message}</span>
          )}
          <label htmlFor="name" className="text-white">
            Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            id="name"
            placeholder="Name"
            className="mb-4 text-black"
          />

          {/* Username  */}
          {errors.username && (
            <span className="text-red-900">{errors.username.message}</span>
          )}

          <label htmlFor="username">Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            id="username"
            placeholder="username"
            className="mb-4 text-black"
          />
          {/* Email  */}
          {errors.email &&(
          <span className="text-red-900">{errors.email.message}</span>)}

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => value.includes("@"),
            })}
            type="text"
            id="email"
            placeholder="email"
            className="mb-4 text-black"
          />

          <button className="bg-red-900" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
