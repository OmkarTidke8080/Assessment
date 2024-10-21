import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signOut",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center gap-x-5">
        <div className="border-2 border-white rounded-lg p-5 hover:cursor-pointer ">
          <button
            onClick={() => {
              navigate("/view-profile");
            }}
            className="text-white"
          >
            View Profile
          </button>
        </div>
        <div className="border-2 border-white rounded-lg p-5 hover:cursor-pointer ">
          <button
            onClick={() => {
              navigate("/update-profile");
            }}
            className="text-white"
          >
            Update Profile
          </button>
        </div>

        <div className="border-2 border-white rounded-lg p-5 hover:cursor-pointer ">
          <button onClick={logout} className="text-white">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
