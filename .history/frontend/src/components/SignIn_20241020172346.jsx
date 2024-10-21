import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserEmail, { UserEmailContext } from "../context/UserEmail.jsx";

function SignIn() {
  const navigate = useNavigate();
  const {setUserEmail} = useContext(UserEmailContext)

  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signIn",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("email : ")
        setUserEmail(data.Email);
        alert("SignIn Successful");
        navigate("/home-page");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Sign In failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form h-[450px] w-[500px] border-2 rounded-3xl text-white   ">
        <div className="form-heading text-center mt-8 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Sign In Form</h1>
        </div>
        <form>
          <div className="flex justify-center">
            <div className="w-2/3">
              <div className="mt-3 w-full">
                <label htmlFor="Email" className=" flex mb-1">
                  Email
                </label>
                <input
                  type="text"
                  id="Email"
                  onChange={handleInputChange}
                  value={data.Email}
                  className="text-white bg-inherit w-full flex border rounded p-2"
                  required
                />
              </div>

              <div className="mt-3 w-full">
                <label htmlFor="Password" className=" flex mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  onChange={handleInputChange}
                  value={data.Password}
                  className="text-white bg-inherit w-full flex border rounded p-2"
                  required
                />
              </div>
              <div className="forgot-password flex justify-end mt-2">
                <button
                  onClick={() => {
                    navigate("/reset-pass");
                  }}
                >
                  Forgot Password?
                </button>
              </div>
            </div>
          </div>

          <div className="sign-up-button flex justify-center m-10">
            <button
              onClick={handleSubmit}
              className="border-2 rounded p-2 w-24 hover:border-green-700 "
            >
              Sign In
            </button>
          </div>
          <div className="AlreadyAccount flex justify-center gap-x-3 ">
            <h2>Don't Have a Account ?</h2>
            <button
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
