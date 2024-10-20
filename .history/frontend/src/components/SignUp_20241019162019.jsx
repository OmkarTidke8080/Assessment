import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
      <div className="flex border-2 border-black jus w-[1000px]">
        <div className="image ">
          <img src={image} height={500} width={500} alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
