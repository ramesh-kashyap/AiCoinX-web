import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div className="relative z-20 px-6">
        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Update Profile</h1>
          <p className="text-n70 text-sm text-center">
            Find the 12 or 24-word seed phrase that was provided when you
            created your wallet.
          </p>
        </div>

        <form className="pt-8 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold pb-2"> Enter Email</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-transparent outline-none placeholder:text-sm text-sm"
              />
            </div>
          </div>
          <div>

</div>
        </form>
        
        <div className="w-full pt-20">
          <Link
            to="/create-password"
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
