
import "./App.css";
import SignUp from "./components/SignUp";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/home"} element={<Home />} />

    </Routes>
    </BrowserRouter>
    <SignUp></SignUp>
    </>
  );
}

export default App;
