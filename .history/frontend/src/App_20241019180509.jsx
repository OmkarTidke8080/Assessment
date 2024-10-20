
import "./App.css";
import LandingPage from "./components/HomePage";
import SignUp from "./components/SignUp";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<LandingPage />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/sign-in"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;