import React from 'react'
import { useNavigate } from "react-router-dom";


function UpdateProfile() {
        const navigate = useNavigate();

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="form h-[620px] w-[700px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
          <div className="form-heading text-center mt-8 mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Update Profile</h1>
          </div>
          <form>
            <div className="flex justify-center mt-10 ">
              <div>
                <div className="flex w-full gap-x-5 ">
                  <div className="w-1/2">
                    <label htmlFor="username" className=" flex mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="FistName"
                      className=" text-white bg-inherit  w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="password" className="flex mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      className="text-white bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="email" className=" flex mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className="text-white bg-inherit w-full flex border rounded p-2"
                    required
                  />
                </div>
                <div className="mt-3 w-full ">
                  <label htmlFor="username" className=" flex mb-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="UserName"
                    className="text-white bg-inherit w-full flex border rounded p-2"
                    required
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <h2>Uploaded Documents</h2>
                </div>

                <div className="flex  gap-x-5 mt-3">
                  <div className="flex justify-between items-center w-1/2 border border-white rounded-lg p-2 h-12">
                    <h2 className="text-lg">Aadhaar Card</h2>
                    <h2 className="text-lg text-blue-500 cursor-pointer">
                      View
                    </h2>
                  </div>

                  <div className="flex justify-between items-center w-1/2 border border-white rounded-lg p-2 h-12">
                    <h2 className="text-lg">Pan Card</h2>
                    <h2 className="text-lg text-blue-500 cursor-pointer">
                      View
                    </h2>
                  </div>
                </div>

                <div className="sign-up-button flex justify-center m-10">
                  <button
                    onClick={() => {
                      navigate("/home-page");
                    }}
                    className="border-2 rounded p-2 w-24 hover:border-green-700 "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default UpdateProfile
