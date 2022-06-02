import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// action creator 
import fetchData from '../redux/products/productsAC';
// components 
import Product from "./Product";
// scss 
import Styles from "../assets/styles/components styles/Products.module.scss";

const Products = () => {

  const [filterCategory, setFilterCategory] = useState([])
  const [search, setSearch] = useState([])
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.productsState)

  const filterCategoryHandler = (e) => {
    setFilterCategory(products.filter(item => item.category === e.target.name))
    setSearch([])
  }
  const findCategories = () => {
    const c1 = products.map(item => item.category);
    const c2 = new Set(c1);
    return [...c2]
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  const searchProduct = e => {
    setSearch(products.filter(item => item.category.includes(e.target.value)))
  }

  console.log(filterCategory)
  console.log(search)

  return (
    <>
      {/* loading & error  */}
      <div className="container mt-2">
        <div className={`${Styles.loadingError} row `} >
          {!!loading && <p>loading products in progress ...</p>}
          {!!error && <p>{error}</p>}
        </div>
        {/* search input  */}
        <div className="row mt-3">
          {!!products.length && <input onChange={e => searchProduct(e)} type="search" className={Styles.searchInput} placeholder='search...' />}
        </div>
        {/* category filter  */}
        <div className="row">
          <div className={Styles.categories} >

            {!!products.length &&
              findCategories().map(item =>
                <div key={item} className={Styles.category} >
                  <button className={Styles.filterBTN} name={item} onClick={(e) => filterCategoryHandler(e)} >{item}</button>
                </div>
              )
            }

          </div>
        </div>
        {/* show product  */}
        <div className={`${Styles.products} row m-0 g-3`}>
          {!!products.length &&
           
            !!search.length ?
            search.map(item => <Product key={item.id} eachProductData={item} />)
             :
            !!filterCategory.length ?
              filterCategory.map(item => <Product key={item.id} eachProductData={item} />)
          :
            products.map(item => <Product key={item.id} eachProductData={item} />)
            }
        </div>
      </div>
    </>
  );
};

export default Products;