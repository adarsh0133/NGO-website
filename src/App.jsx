import React from "react";
import Home from "./components/Home";
import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Approach from "./components/Approach";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;