import React from "react";

function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="space-x-4">
          <button
            onClick={() => navigate("/sign-in")}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/options")}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
     =
    </>
  );
}

export default LandingPage;
