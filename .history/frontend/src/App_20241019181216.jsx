
import "./App.css";
import LandingPage from "./components/HomePage";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/sign-in"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
