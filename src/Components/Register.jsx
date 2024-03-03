import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    setError,

    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div className="h-screen bg-black bg-opacity-90 flex  items-center flex-col ">
        <h1 className="font-bold text-2xl text-white m-8">Registration</h1>
        <form className="flex flex-col text-white font-semibold" >
          <label htmlFor="Email" className=" ml-1 mb-1">
            Email
          </label>
          <input
            {...register("emil", {
              required: "Email required",
            })}
            type="text"
            id="Email"
            placeholder=" Email"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2  
            "
          />
          <label htmlFor="username" className=" ml-1 mb-1">
            Username
          </label>
          <input
            {...register("username", {
              required: "Username required",
            })}
            type="text"
            id="username"
            placeholder=" Username"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2  
            "
          />
          <label htmlFor="fullName" className=" ml-1 mb-1">
            Full-Name
          </label>
          <input
            {...register("fullName", {
              required: "full-Name required",
            })}
            type="text"
            id="fullName"
            placeholder=" Full-Name"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2  
            "
          />
          <div className="flex flex-justify-center mt-2">
            <input
              {...register("password", {
                required: "password required",
              })}
              type="text"
              id="password"
              placeholder=" Password"
              className="mb-4 text-black h-7 w-32 rounded-lg p-2  
            "
            />
            <input
              {...register("Confirm-password", {
                required: "Confrim Password required",
              })}
              type="text"
              id="confirm-password"
              placeholder=" Confirm-Password"
              className="mb-4 text-base text-black-900 h-7 ml-2 w-40 rounded-lg p-2  
            "
            />
          </div>
          <label htmlFor="avatar" className=" ml-1 mb-1">
            Avatar
          </label>
          <input id="avatar" type="file" accept="image/*" className="
          h-9 w-16 border-spacing-1 border-red-700" />
        </form>

      </div>
    </>
  );
}

export default Register;
