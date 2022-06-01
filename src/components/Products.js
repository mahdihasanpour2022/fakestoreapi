import React from 'react';
import { useSelector } from "react-redux";
// components 
import Product from "./Product";
// scss 
import Styles from "../assets/styles/components styles/Products.module.scss";
const Products = () => {

  const { loading, products, error } = useSelector(state => state.productsState)

  return (
    <>
      {!!loading && <p>loading products in progress ...</p>}
      {!!error && <p>{error}</p>}
      <div className="container">
        <div className={`${Styles.products} row`}>
          {!!products.length && products.map(item => <Product key={item.id} eachProductData={item} />)}
        </div>
      </div>
    </>
  );
};

export default Products;