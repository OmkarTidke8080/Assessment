import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
      <div className="flex border-2 border-black w-4/5">
        <div className="image ">
          <img src={image} height={500} width={500} alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
