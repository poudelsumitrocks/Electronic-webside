import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignup = () => {
    navigate("signup");
  };
  const handleLogin = () => {
    navigate("/landing");
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center px-4">
      <h1 className="text-2xl sm:text-3xl p-4 text-center">
        Welcome to our WebPage
      </h1>

      <div className="flex justify-center items-center flex-1 w-full">
        <form
          className="bg-white flex flex-col gap-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 rounded-xl shadow-md"
          onSubmit={handleSubmit()}
        >
          <div className="flex justify-center items-center gap-10 text-center">
            <h1
              className="text-xl sm:text-2xl font-bold hover:underline cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </h1>
            <h1
              className="text-xl sm:text-2xl font-bold hover:underline cursor-pointer"
              onClick={handleSignup}
            >
              Signup
            </h1>
          </div>

          <input
            type="email"
            placeholder="Enter username or email"
            className="border p-2 rounded-xl w-full bg-gray-100 text-gray-500"
            {...register("email", { required: true })}
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: true })}
              className="border p-2 rounded-xl w-full bg-gray-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <input type="checkbox" className="w-4 h-4" />
            <span>Remember Me</span>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-2 text-white font-semibold rounded-md cursor-pointer" onClick={()=>navigate("/")}
          >
            Login
          </button>

          <h3 className="text-red-400 text-center text-sm sm:text-base">
            Forgot password?
          </h3>
        </form>
      </div>
    </div>
  );
}
