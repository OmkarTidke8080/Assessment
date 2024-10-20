import React from "react";

function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex border-2 h-800 border-black  w-[1000px]">
          <div className="form border-2 text-white w-full bg-gradient-to-r from-gray-900 to-slate-600 ">
            <div className="form-heading font-medium font-serif mt-5">
              <h2>Sign Up Form</h2>
            </div>

            <form action="">
              <div className="flex justify-center mt-5 ">
                <div>
                  <div className="flex gap-3">
                    <div>
                      <label htmlFor="username" className=" flex mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="FistName"
                        className=" flex border rounded p-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="flex mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="LastName"
                        className=" flex border rounded p-2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className=" flex mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className=" w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="FistName"
                      className=" w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      Password
                    </label>
                    <input
                      type="text"
                      id="FistName"
                      className="w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      Aadhaar Card
                    </label>
                    <input
                      type="file"
                      id="FistName"
                      className="w-full flex border rounded p-2"
                      required
                    />
                  </div>{" "}
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      Pan Card
                    </label>
                    <input
                      type="file"
                      id="FistName"
                      className="w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div className="sign-up-button m-10">
                    <button className="border-2 rounded p-2 w-20">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
