import React from 'react';
import {Routes , Route } from "react-router-dom";
// components
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

const ProuductsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Products />} />
        <Route path="productDetail/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default ProuductsRouter;