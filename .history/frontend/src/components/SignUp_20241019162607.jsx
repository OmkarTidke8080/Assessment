import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
    <div className="flex justify-center items-center mt-20">

      <div className="flex border-2 h-[500px] border-black  w-[1000px]">
        <div className="image h">
          <img className="border-2 border-black"  alt="" />
        </div>

        <div className="form">
           <form action="">
            <label htmlFor="FirstName">
                First Name
                <input
                 type="text" 

                 /> 
            </label>
           </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
