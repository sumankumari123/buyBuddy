import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";

import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
