import React from 'react';
// import { useNavigate, useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// scss 
import Styles from "../assets/styles/components styles/product.module.scss";
// helper function 
import { shortener5, shortener2 } from "../helper_function/helperFunction";

function Product({ eachProductData }) {

  // const path = useMatch("/products").pattern.path;
  const navigate = useNavigate();

  // destructuring each product data
  const { id, image, category, price, title, description, rating: { count, rate } } = eachProductData;

  const goToProductDetail = () => {
    // navigate(`/products/productDetail/${id}` , {replace:true})
    // navigate(`${path}/productDetail/${id}?category=${category}`);
    navigate(`/products/productDetail/${id}?category=${category}`);
  };

  return (
    <>
      <div className="col">
        <div className={Styles.productCard}>
          <img src={image} alt={id} className={Styles.productImage} />
          <div className={Styles.content}>
            <h5 className={Styles.title}>{shortener2(title)}</h5>
            <p className={Styles.id}>ID:{id}</p>
            <p className={Styles.category}>{category}</p>
            <p className={Styles.description}>{shortener5(description)}</p>
            <p className={Styles.count}>count: {count}</p>
            <p className={Styles.rate}>rate: {rate}</p>
            <h5 className={Styles.price}>{price} $</h5>
            <button onClick={() => goToProductDetail()}>More Detail ...</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;