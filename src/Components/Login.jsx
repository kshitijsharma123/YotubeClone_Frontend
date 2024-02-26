import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const checkPassword = () => {
    const password = getValues("password");
    const confrimPassword = getValues("confirmPassword");
    if (password !== confrimPassword) {
      setError("root", {
        message: "Confrim Password and Password dont match",
      });
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "This email is already taken",
      });
    }
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

          {errors.email && (
            <span className="text-red-900">{errors.email.message}</span>
          )}

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must have @";
                }
                return true;
              },
            })}
            type="text"
            id="email"
            placeholder="email"
            className="mb-4 text-black"
          />

          {/* Password  */}
          {errors.password && (
            <span className="text-red-900">{errors.password.message}</span>
          )}

          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            onBlur={checkPassword}
            type="password"
            id="password"
            placeholder="password"
            className="mb-4 text-black"
          />

          {/* Confrim Password  */}
          {errors.ConfrimPassword && (
            <span className="text-red-900">
              {errors.ConfrimPassword.message}
            </span>
          )}

          <label htmlFor="confirmpassword" className="text-white">
            Confrim Password
          </label>
          <input
            {...register("ConfrimPassword", {
              required: "Password is required",
            })}
            onBlur={checkPassword}
            type="password"
            id="confirmPassword"
            placeholder="password"
            className="mb-4 text-black"
          />

          <button disabled={isSubmitting} className="bg-red-900" type="submit">
            {isSubmitting ? "loading..." : "Submit"}
          </button>
          {errors.root && (
            <span className="text-red-900"> {errors.root.message}</span>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
