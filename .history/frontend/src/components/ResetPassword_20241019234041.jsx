import React from "react";

function ResetPassword() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form h-[450px] w-[800px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
          <div className="flex ">
            <div className=" buttons-part w-1/2 border-white border-2 rounded-3xl h-[450px]">
              <div className="flex justify-center items-center h-[450px]">
                <div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Request Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Verify Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Reset Password
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="forms-part w-1/2">
              <form action="">
                <div className="flex justify-center items-center">
                  <div className="mt-3 w-2/3">
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
                </div>
                <div>
                    
                </div>
                  <div className="flex justify-center border-white border w-24">
                    <button>
                        Request Otp
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
