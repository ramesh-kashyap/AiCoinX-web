import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden  justify-start items-start text-white">
      {/* Blurred Circular Background */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      
      <div className="relative z-20 px-6">
        {/* Header Text */}
        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Login to Your Wallet</h1>
          <p className="text-n70 text-sm text-center">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Form */}
        <form className="pt-8 flex flex-col gap-4">
          {/* Email Field */}
          <div>
            <p className="text-sm font-semibold pb-2">Email Address</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none placeholder:text-sm text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          {/* <div>
            <p className="text-sm font-semibold pb-2">Password</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="password"
                placeholder="******"
                className="bg-transparent outline-none placeholder:text-sm text-sm passwordField"
              />
              <div className="flex justify-start items-center gap-1">
                <i className="ph ph-eye-closed cursor-pointer passwordShow"></i>
              </div>
            </div>
          </div> */}
        </form>

        {/* Face ID Toggle */}
        <div className="pt-8 flex justify-between items-center">
          <p className="font-medium">Sign in with Face ID?</p>
          <div className="sign-in-toggle active toggle">
            <div className="circle"></div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <p className="pt-3 text-xs text-n70">
          By logging in, you agree to our{" "}
          <a href="" className="text-g300">
            Terms and Conditions.
          </a>
        </p>

        {/* Login Button */}
        <div className="w-full pt-20">
          <Link
            to="/home"
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
