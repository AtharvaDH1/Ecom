import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";
import Cart from "./Components/Cart";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/login.jsx";

function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
