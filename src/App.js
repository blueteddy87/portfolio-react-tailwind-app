import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-[#36393B]">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
