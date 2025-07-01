import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import BackgroundEffects from "./components/BackgroundEffect/BackgroundEffects";
import Home from "./pages/Home";
import ProductSection from "./components/Products/ProductSection";
import Products from "./pages/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
