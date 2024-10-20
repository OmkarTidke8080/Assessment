import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex border-2 h-auto border-black  w-[1000px]">
          <div className="image border-2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[500px]">
            <img className=" h-full w-full " src={image} alt="" />
          </div>

          <div className="form border-2 w-1/2">
            <section className="mt-10">
              <div className="flex justify-center">
                <h4 className="text-black text-2xl mb-5">Sign In</h4>
              </div>
              <form id="signInForm" className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    className="mb-3 font-medium outline-none text-gray-900"
                    htmlFor="email"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleInputChange}
                    placeholder="Your UserName"
                    className="w-full mt-1 p-2 border-b-2 border-black bg-white text-black"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="mb-3 font-medium text-gray-900"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Your Password"
                    className="w-full mt-1 p-2 border-b-2 border-black bg-white text-black"
                  />
                </div>
              </form>

              <div className="flex justify-between mt-5 ">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="text-black" for="vehicle1">
                    {" "}
                    Remember Me
                  </label>
                </div>

                <div>
                  {/* <h2>Forgot Password?</h2> */}
                  <a
                    className="underline underline-offset-8 hover:text-blue-500	"
                    href=""
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  form="signInForm" // Corrected form ID
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white rounded-lg w-5/6 h-8"
                >
                  Sign In
                </button>
              </div>

              <div className="mt-3 h-1 ">
                <hr />
              </div>

              <div className="flex justify-center mt-3">
                <h3>Or Sign In with </h3>
              </div>

              <div className="symbols flex justify-center mt-5 ">
                <img
                  src={googleSymbol}
                  alt=""
                  height={20}
                  width={20}
                  className="mx-1 hover:cursor-pointer"
                />
                <img
                  src={facebookSymbol}
                  alt=""
                  height={20}
                  width={20}
                  className="mx-1 hover:cursor-pointer"
                />
              </div>

              <div className="mt-3 h-1 ">
                <hr />
              </div>

              <div className="flex justify-center mt-2">
                <h3>
                  Don't have account?{" "}
                  <a
                    onClick={() => {
                      navigate("/options");
                    }}
                    className="text-black	hover:text-blue-600 cursor-pointer font-semibold"
                  >
                    SignUp Now
                  </a>{" "}
                </h3>
              </div>
            </section>

            <div>
              <form>
                <label htmlFor=""></label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
