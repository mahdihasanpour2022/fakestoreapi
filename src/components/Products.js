import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
// action creator 
import fetchData from '../redux/products/productsAC';
// components 
import Product from "./Product";
// scss 
import Styles from "../assets/styles/components styles/Products.module.scss";


const Products = () => {

  const dispatch =useDispatch();
  const { loading, products, error } = useSelector(state => state.productsState)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
      {!!loading && <p>loading products in progress ...</p>}
      {!!error && <p>{error}</p>}
      <div className="container">
        <div className={`${Styles.products} row m-0 g-2`}>
          {!!products.length && products.map(item => <Product key={item.id} eachProductData={item} />)}
        </div>
      </div>
    </>
  );
};

export default Products;