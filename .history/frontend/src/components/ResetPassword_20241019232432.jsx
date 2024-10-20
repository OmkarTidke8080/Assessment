import React from "react";

function ResetPassword() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form h-[450px] w-[800px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
          <div className="flex ">
            <div className="buttons-part w-1/2 border-white border-2 rounded-3xl h-[450px] bg-gradient-to-r from-gray-800 to-gray-600 p-6">
              <div className="flex flex-col justify-center items-start h-full">
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500 rounded focus:ring-2 focus:ring-green-300" // Style the checkbox
                  />
                  <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:text-white transition duration-200">
                    Request Otp
                  </button>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500 rounded focus:ring-2 focus:ring-green-300" // Style the checkbox
                  />
                  <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:text-white transition duration-200">
                    Verify Otp
                  </button>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500 rounded focus:ring-2 focus:ring-green-300" // Style the checkbox
                  />
                  <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:text-white transition duration-200">
                    Reset Password
                  </button>
                </div>
              </div>
            </div>

            <div className="forms-part w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
