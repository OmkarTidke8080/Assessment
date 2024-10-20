import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
    <div className="flex justify-center items-center mt-20">

      <div className="flex border-2 border-black  w-[1000px]">
        <div className="image ">
          <img className="border-" src={image} height={500} width={500} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
