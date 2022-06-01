import React from 'react';
import {Link} from "react-router-dom";
// scss 
import Styles from "../assets/styles/components styles/product.module.scss";
// helper function 
import { shortener5, shortener2 } from "../helper_function/helperFunction";



const Product = ({ eachProductData }) => {

  // destructuring each product data
  // const {rating:{count,rate}} = eachProductData;
  const { id, image,category, price,title, description } = eachProductData;

  return (
    <>
      <div className="col" >
        <div className={Styles.productCard}>
          <img src={image} alt={id} className={Styles.productImage} />
          <div className={Styles.content}>
            <h5 className={Styles.title}>{shortener2(title)}</h5>
            <p className={Styles.id}>ID:{id}</p>
            <p className={Styles.category}>{category}</p>
            <p className={Styles.description}>{shortener5(description)}</p>
            <h5 className={Styles.price}>{price} $</h5>
            <Link to="/productDetail">More Detail ...</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;