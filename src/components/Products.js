import React from 'react';
import { useSelector } from "react-redux";
// components 
import Product from "./Product";

const Products = () => {

  const { loading, products, error } = useSelector(state => state.productsState)

  return (
    <>
      {!!loading && <p>loading products in progress ...</p>}
      {!!error && <p>{error}</p>}
      {!!products.length && products.map(item => <Product key={item.id} eachProductData={item} />)}
    </>
  );
};

export default Products;