import { useState } from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Signup from "./Signup";
import Login from "./Login";
import NewProduct from "./Newproduct";
import ProductList from "./ProductList";
import UpdateProduct from "./UpdateProduct";
import WishList from "./WishList";
import ProductClient from "./ProductClient";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> 

    
        <Route path="/signup" element={<Signup />} />

       <Route path="/list" element={
  <ProtectedRoute allowedRole="seller">
    <ProductList />
  </ProtectedRoute>
} />
        <Route path="/newProduct" element={
          <ProtectedRoute allowedRole="seller">
            <NewProduct />
          </ProtectedRoute>
        } />
        <Route path="/update/:id" element={
          <ProtectedRoute allowedRole="seller">
            <UpdateProduct />
          </ProtectedRoute>
        } />
        <Route path="/wishlist" element={
          <ProtectedRoute allowedRole="seller">
            <WishList />
          </ProtectedRoute>
        } />
        <Route path="/list" element={
          <ProtectedRoute allowedRole="seller">
            <ProductList />
          </ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute allowedRole="buyer">
            <ProductClient />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
