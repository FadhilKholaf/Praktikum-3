import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Galeri from "./pages/Galeri";
import Navbar from "./components/Navbar";
import { FooterWithSocialLinks } from "./components/Footer";
import EnvironmentalDaysList from "./pages/HariBesar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/galeri" element={<Galeri />}></Route>
        <Route path="/hari-besar" element={<EnvironmentalDaysList />}></Route>
        <Route path="/*" element={<Beranda />}></Route>
      </Routes>
      <FooterWithSocialLinks />
    </BrowserRouter>
  );
}

export default App;
