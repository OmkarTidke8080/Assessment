import React, { useState } from "react";

function ResetPassword() {
  const [requestOtpIsChecked , setRequestOtpIsChecked] = useState(false);
  const [verifyOtpIsChecked , setVerifyOtpIsChecked] = useState(false);
  const [resetPasswordIsChecked , setResetPasswordIsChecked] = useState(false);

  const handleRequestOtpCheck = (event) =>{
       requestOtpIsChecked(true);
  }
  const handleVerifyOtpCheck = (event) =>{
       requestOtpIsChecked(true);
  }
  const handleResetPasswordCheck = (event) =>{
       requestOtpIsChecked(true);
  }

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
                      onChange={handleRequestOtpCheck}
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Request Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      onChange={handleVerifyOtpCheck}
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Verify Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      onChange={handleResetPasswordCheck}
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded">
                      Reset Password
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>

            {requestOtpIsChecked && (
              <div>
                {/* Content for Request OTP */}
                <p>Request OTP content goes here.</p>
              </div>
            )}

            {verifyOtpIsChecked && (
              <div>
                {/* Content for Verify OTP */}
                <p>Verify OTP content goes here.</p>
              </div>
            )}

            {resetPasswordIsChecked && (
              <div>
                {/* Content for Reset Password */}
                <p>Reset Password content goes here.</p>
              </div>
            )}

           
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
