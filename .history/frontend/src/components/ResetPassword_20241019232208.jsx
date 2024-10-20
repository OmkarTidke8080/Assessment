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
                  <div className="mb-16">
                    <input type="checkbox" />
                    <button className="text-white  font-semibold ml">Request Otp</button>
                  </div>

                  <div className="mb-16">
                    <input type="checkbox" />
                    <button className="text-white font-semibold ml-2">Verify Otp</button>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <button className="text-white font-semibold">Reset Password</button>
                  </div>
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
