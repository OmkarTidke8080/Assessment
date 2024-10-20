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
            <div className="form-heading font">
              <h2>Sign Up Form</h2>
            </div>
            <form action=""></form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
