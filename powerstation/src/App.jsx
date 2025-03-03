import { useState } from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Signup from "./Signup";
import Login from "./Login";
import NewProduct from "./Newproduct";
import ProductList from "./ProductList";
import UpdateProduct from "./UpdateProduct"; // Import the UpdateProduct component
import WishList from "./WishList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="list" element={<ProductList />} />
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/update/:id" element={<UpdateProduct />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
