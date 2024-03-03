import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import userDataContext from "../context/userContext";

function Login() {

  const { login, userStatus } = useContext(userDataContext)
  const {
    register,
    handleSubmit,
    setError,

    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = async (formData) => {
    const { data, password } = formData
    try {
      await login(data, password)

    } catch (err) {

    }

  };

  useEffect(() => {

    if (userStatus.islogged === false) {
      setError("root", {
        message: userStatus.message
      })
    } else {
      window.location.href = "/"
    }
  }, [userStatus])

  return (
    <>
      <div className="h-screen bg-black bg-opacity-90 flex justify-center items-center flex-col ">
        <h1 className="font-bold text-white m-8">Login</h1>

        <form
          className="flex flex-col text-white font-semibold"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Data  */}
          {errors.data && (
            <span className="text-red-900">{errors.data.message}</span>
          )}

          <label htmlFor="Data" className="mb-1">
            Username or Email
          </label>
          <input
            {...register("data", {
              required: "Email or Username  is required",
            })}
            type="text"
            id="Data"
            placeholder="Username or Email"
            className="mb-4 text-black h-7 w-64 rounded-lg p-1 focus:outline-none focus:border-2 focus:border-red-600
            "
          />

          {/* Password  */}
          {errors.password && (
            <span className="text-red-900">{errors.password.message}</span>
          )}

          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            id="password"
            placeholder="Password"
            className="mb-4 text-black h-7 w-64 rounded-lg p-1 focus:outline-none focus:border-2 focus:border-red-600"
          />

          {errors.root && (
            <span className="text-red-900 mb-4"> {errors.root.message}</span>
          )}
          <button
            disabled={isSubmitting}
            className="bg-red-800  h-7 w-64 rounded-lg hover:bg-red-600"
            type="submit"
          >
            {isSubmitting ? "loading..." : "Submit"}
          </button>

          <div className="m-7 font-normal">
            <p>Don't have an account?</p>{" "}
            <Link
              className="  text-red-800 
           underline underline-offset-4 
           hover:text-red-600
            "
              to="/register"
            >
              {" "}
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
