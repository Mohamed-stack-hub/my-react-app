import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//! Home Page
import Home from "./pages/Home";
// ? About Page
import About from "./pages/About";
//* Portfolio Page
import Port from "./pages/Port";
//Contact Page
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Port" element={<Port />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
