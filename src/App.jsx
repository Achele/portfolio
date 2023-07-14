import { NavHashLink } from "react-router-hash-link";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      {/* <NavHashLink to={"#home"}>Home</NavHashLink>
      <NavHashLink to={"#skills"}>Skills</NavHashLink> */}
    </>
  );
}

export default App;
