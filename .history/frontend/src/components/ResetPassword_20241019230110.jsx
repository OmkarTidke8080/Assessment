import React from 'react'

function ResetPassword() {
    return (
      <>
        <div className="flex justify-center items-center ">
          <div className='mt-20'>
            <div className="border border-white ">
              <button className="text-white">Request Otp</button>
            </div>

            <div>

            <button className="text-white">Verify Otp</button>
            </div>
            <button className="text-white">Reset Password</button>
          </div>
        </div>
      </>
    );
}

export default ResetPassword
