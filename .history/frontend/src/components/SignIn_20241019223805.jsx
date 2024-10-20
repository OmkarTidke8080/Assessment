import React from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form h-[450px] w-[500px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
        <div className="form-heading text-center mt-8 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Sign In Form</h1>
        </div>
        <form>
          <div className="flex justify-center">
            <div className="w-2/3">
              <div className="mt-3 w-full">
                <label htmlFor="email" className=" flex mb-1">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="text-white bg-inherit w-full flex border rounded p-2"
                  required
                />
              </div>

              <div className="mt-3 w-full">
                <label htmlFor="username" className=" flex mb-1">
                  Password
                </label>
                <input
                  type="text"
                  id="FistName"
                  className="text-white bg-inherit w-full flex border rounded p-2"
                  required
                />
              </div>
              <div>
                
              </div>
            </div>
          </div>

          <div className="sign-up-button flex justify-center m-10">
            <button className="border-2 rounded p-2 w-24 hover:border-green-700 ">
              Sign In
            </button>
          </div>
          <div className="AlreadyAccount flex justify-center gap-x-3">
            <h2>Don't Have a Account ?</h2>
            <button
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
