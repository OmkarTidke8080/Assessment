import React from "react";
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
  return (
    <>
    <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-white p-5 hover:cursor-pointer ">
        <button
        onClick={() =>{
            
        }}
         className="text-white">View Your Profile</button>
        </div>
    </div>   
     </>
  );
}

export default HomePage;
