import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Tours from "./components/Tours";
import About from "./components/About";
import Cortina from "./pages/Cortina";
import Hike from "./components/Hike";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Tours" element={<Tours />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cortina" element={<Cortina />} />
      <Route path="/Hike" element={<Hike />} />
    </Routes>
  );
}

export default App;
