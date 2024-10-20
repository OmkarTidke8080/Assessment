import React from 'react'

function SignIn() {
    return (
      <div className="flex justify-center items-center ">
        <div className="flex border  rounded-md h-[450px] w-[500px]">
          <div className="form border-2 rounded-3xl text-white w-full bg-gradient-to-r from-gray-900 to-slate-600 ">
            <div className="form-heading text-center mt-8 mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">
                Sign Up Form
              </h1>
            </div>
            <form>
              <div className='flex justify-center'>
                <div className="w-2/3">
                  <div className="mt-3">
                    <label htmlFor="email" className=" flex mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="text-black bg-inherit w-full flex border rounded p-2"
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
                      className="text-black bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="sign-up-button m-10">
                <button className="border-2 rounded p-2 w-24 hover:border-green-700 ">
                  Sign Up
                </button>
              </div>
              <div className="AlreadyAccount flex justify-center gap-x-3">
                <h2>Already Have a Account ?</h2>
                <button>Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignIn
