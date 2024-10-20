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

          <div className="form border-2  w-1/2 lg:w- bg-gray-300">
            <div className="form-heading font-medium font-serif mt-5">
              <h2>Sign Up Form</h2>
            </div>

            <form action="">
              <div className="flex justify-center mt-5 ">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;