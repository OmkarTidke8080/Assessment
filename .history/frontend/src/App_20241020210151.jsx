import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import SignIn from "./components/SignIn.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import HomePage from "./components/HomePage.jsx";
import ViewProfile from "./components/ViewProfile.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import Logout from "./components/Logout.jsx";
import UserEmail from "./context/UserEmail.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#fff",
          }}
        >
          {" "}
          <ScaleLoader />
        </div>
      ) : (
        <UserEmail>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<LandingPage />} />
              <Route path={"/home-page"} element={<HomePage />} />
              <Route path={"/view-profile"} element={<ViewProfile />} />
              <Route path={"/view-profile"} element={<ViewProfile />} />
              <Route path={"/update-profile"} element={<UpdateProfile />} />
              <Route path={"/sign-up"} element={<SignUp />} />
              <Route path={"/sign-in"} element={<SignIn />} />
              <Route path={"/logout"} element={<Logout />} />
              <Route path={"/reset-pass"} element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
        </UserEmail>
      )}
    </>
  );
}

export default App;
