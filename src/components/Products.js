import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// action creator 
import fetchData from '../redux/products/productsAC';
// components 
import Product from "./Product";
// scss 
import Styles from "../assets/styles/components styles/Products.module.scss";

const Products = () => {

  const [search, setSearch] = useState([])
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.productsState)


  const findCategories = useCallback(() => {
    const c1 = products.map(item => item.category);
    console.log(c1)

    const c2 = new Set(c1);
    console.log(c2)
    setCategories([...c2])
  }, [products])

  useEffect(() => {
    dispatch(fetchData());
    findCategories()

  }, [dispatch, findCategories])

  const searchProduct = e => {
    setSearch(products.filter(item => item.category.includes(e.target.value)))
  }
  console.log(categories)
  return (
    <>
      <div className="container mt-2">
        <div className={`${Styles.loadingError} row `} >
          {!!loading && <p>loading products in progress ...</p>}
          {!!error && <p>{error}</p>}
        </div>
        <div className="row mt-3">
          {!!products.length && <input onChange={e => searchProduct(e)} type="search" className={Styles.searchInput} placeholder='search...' />}
        </div>
        <div className="row">
          <div className={Styles.categories} >
            {!!products.length && !!categories.length &&
              categories.map(item =>
                <div key={item.id} className={Styles.category} >
                  <p>{item}</p>
                </div>
              )
            }
          </div>
        </div>
        <div className={`${Styles.products} row m-0 g-3`}>
          {!!products.length &&
            !!search.length ?
            search.map(item => <Product key={item.id} eachProductData={item} />) :
            products.map(item => <Product key={item.id} eachProductData={item} />)}
        </div>
      </div>
    </>
  );
};

export default Products;