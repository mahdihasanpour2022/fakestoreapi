import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// axios 
import axios from "axios";
// scss 
import Styles from "../assets/styles/components styles/ProductDetails.module.scss";


const ProductDetails = () => {

  const [thisProduct, setThisProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  const { id } = useParams()
  const qs = new URLSearchParams(useLocation().search).get("category");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setThisProduct(res.data)
        setLoading(false)
      })
      .catch(error => setErrors(error.message))
  }, [id])
 
  return (
    <>
      {!!loading ? <p>loading data... </p> :
        !!errors ? <p>{errors}</p> :
          !!Object.keys(thisProduct).length &&
          <div className="container-fluid px-5">
            <div className="row">
              <p className={Styles.paraph}>product details - id:{id} - sortBy : {qs}</p>
              <div className={Styles.productDetail} >
                <img src={thisProduct.image} alt={id} className={Styles.productImage} />
                <div className={Styles.content}>
                  <h5 className={Styles.title}>{thisProduct.title}</h5>
                  <p className={Styles.id}>ID:{thisProduct.id}</p>
                  <p className={Styles.category}>{thisProduct.category}</p>
                  <p className={Styles.description}>{thisProduct.description}</p>
                  <p className={Styles.count}>count: {thisProduct.count}</p>
                  <p className={Styles.rate}>rate: { }</p>
                  <h5 className={Styles.price}>{thisProduct.price} $</h5>
                </div>
              </div>

            </div>
          </div>
      }
    </>
  );
};

export default ProductDetails;