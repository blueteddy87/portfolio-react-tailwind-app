import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Weather from "./components/Weather";



function App() {
  return (
    <div className="w-full h-screen bg-[#36393B]">
      <Navbar />
      <Home />
      <Weather />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
