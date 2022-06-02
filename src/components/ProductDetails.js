// import React, { useState, useEffect } from 'react';
import React, {  useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// scss 
// import Styles from "../assets/styles/components styles/ProductDetails.module.scss";


const ProductDetails = () => {

  // const [thisProduct, setThisProduct] = useState({})

  const { id } = useParams()
  const qs = new URLSearchParams(useLocation().search).get("category");

  useEffect(() => {
   
  }, [])


  // destructuring each product data
  // const { image, category, price, title, description, rating: { count, rate } } = thisProduct;

  return (
    <>
      product details - id:{id} - sortBy : {qs}
    </>
  );
};

export default ProductDetails;