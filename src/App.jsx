import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Tours from "./routes/Tours";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}
