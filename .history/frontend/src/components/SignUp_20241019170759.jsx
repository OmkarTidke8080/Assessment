import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex border-2 h-auto border-black  w-[1000px]">
          <div className="image border-2 h-auto  w-1/2">
            <img className=" h-full w-full " src={image} alt="" />
          </div>

          <div className="form border-2  w-1/2  bg-gray-300">
            <div className="form-heading font-medium font-serif mt-5">
              <h2>Sign Up Form</h2>
            </div>

            <form action="">
              <div className="flex justify-center mt-5 ">
                <div>
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
                  <div>
                    <label htmlFor="email" className=" flex mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className=" w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="FistName"
                      className=" flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className=" flex mb-1">
                      Password
                    </label>
                    <input
                      type="text"
                      id="FistName"
                      className=" flex border rounded p-2"
                      required
                    />
                  </div>
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
                  </div>{" "}
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
