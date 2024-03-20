import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import userDataContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

import { MdFileUpload } from "react-icons/md";
function Register() {

  const inputRef = useRef(null)
  const { registration, userStatus } = useContext(userDataContext);
  const redirect = useNavigate();


 

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    const { email, username, fullName, password, avatar, coverImage } = data;
    await registration(fullName, email, username, password, avatar, coverImage);
  };

  useEffect(() => {
    if (userStatus.isRegistered === true) {
      window.location.href = "/login";
    }
  }, [userStatus, redirect]);

  return (
    <>
      <div className="h-screen flex items-center flex-col">
        <h1 className="font-bold text-2xl text-white m-8">Registration</h1>

        <form className="flex flex-col text-white font-semibold" onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          {errors.email && <span className="text-red-900 mb-4">{errors.email.message}</span>}
          <label htmlFor="email" className="ml-1 mb-1">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email required"
            })}
            type="text"
            id="email"
            placeholder="Email"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2 focus:outline-none focus:outline-red-700"
          />

          {/* Username */}

          {errors.username && <span className="text-red-900 mb-4">{errors.username.message}</span>}
          <label htmlFor="username" className="ml-1 mb-1">
            Username
          </label>
          <input
            {...register("username", {
              required: "Username required"
            })}
            type="text"
            id="username"
            placeholder="Username"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2 focus:outline-none focus:outline-red-700"
          />

          {/* Fullname */}

          {errors.fullName && <span className="text-red-900 mb-4">{errors.fullName.message}</span>}
          <label htmlFor="fullName" className="ml-1 mb-1">
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Full Name required"
            })}
            type="text"
            id="fullName"
            placeholder="Full Name"
            className="mb-4 text-black h-7 w-64 rounded-lg p-2 focus:outline-none focus:outline-red-700"
          />

          {/* Password */}

          <div className="flex flex-justify-center mt-2">
            <input
              {...register("password", {
                required: "Password required"
              })}
              type="password"
              id="password"
              placeholder="Password"
              className="mb-4 text-black h-7 w-32 rounded-lg p-2 focus:outline-none focus:outline-red-700"
            />

            {/* Confrim Password */}

            <input
              {...register("confirmPassword", {
                required: "Confirm Password required",
                validate: (value) => value === password || "Passwords do not match"
              })}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="mb-4 text-black h-7 ml-2 w-40 rounded-lg p-2 focus:outline-none focus:outline-red-700"
            />
          </div>
          {errors.confirmPassword && <span className="text-red-900 mb-4">{errors.confirmPassword.message}</span>}


          {/* Avatar */}
      <label htmlFor="avatar">Avatar</label>
            <input

              type="file"
              accept="image/* "
              ref={inputRef}
              className=""
              {...register("avatar")}
            />


       


          {/* Cover-Image */}

          <label htmlFor="coverImage" className="ml-1 mb-1">
            Cover Image
          </label>
          <input
            id="coverImage"
            type="file"
            accept="image/*"
            className="h-9 w-16 border-spacing-1 border-red-700"
            {...register("coverImage")}
          />
          {errors.root && <span className="text-red-900 mb-4">{errors.root.message}</span>}
          <button
            disabled={isSubmitting}
            className="m-3 text-white font-semibold bg-red-800 h-7 w-64 rounded-lg hover:bg-red-600"
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
