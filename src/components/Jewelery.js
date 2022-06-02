import React from 'react';
import { useSelector } from "react-redux";
// components 
import Product from "../components/Product";
// scss 
import Styles from "../assets/styles/components styles/Jewelery.module.scss";


const Jewelery = () => {

  const { loading, error, jewelery } = useSelector(state => state.productsState)

  // console.log(error)
  // console.log(loading)
  // console.log(jewelery)
  return (
    <>
      {!!loading && <p>loading jewelary...</p>}
      {!!error && <p>{error}</p>}
      <div className="container">
        <div className="row">
          <div className={Styles.jewelary} >
            {!!jewelery.length && jewelery.map(item => <Product key={item.id} eachProductData={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jewelery;