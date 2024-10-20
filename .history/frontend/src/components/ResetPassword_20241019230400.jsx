import React from "react";

function ResetPassword() {
  return (
    <>
    

        <div className="mt-20 flex gap-x-5">
          <div className="border border-white ">
            <button className="text-white">Request Otp</button>
          </div>

          <div>
            <button className="text-white">Verify Otp</button>
          </div>
          <div>
            <button className="text-white">Reset Password</button>
          </div>
        </div>
    </>
  );
}

export default ResetPassword;