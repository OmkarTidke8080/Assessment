import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/HomePage.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import SignIn from "./components/SignIn.jsx";

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
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/sign-up"} element={<SignUp />} />
            <Route path={"/sign-in"} element={<SignIn />} />
            <Route path={"/reset-pass"} element={<SignIn />} />

          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
