import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
