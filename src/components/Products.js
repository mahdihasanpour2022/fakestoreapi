import React, {  useState } from 'react';
import { useSelector } from "react-redux";
// components 
import Product from "./Product";
// scss 
import Styles from "../assets/styles/components styles/Products.module.scss";

const Products = () => {

  const [filterCategory, setFilterCategory] = useState([])
  const [search, setSearch] = useState([])
  const { loading, products, error } = useSelector(state => state.productsState)

  // click on button result in filterd product and show only products that have this category   
  const filterCategoryHandler = (e) => {
    setFilterCategory(products.filter(item => item.category === e.target.name))
    setSearch([])
  }
  // find all of the category kind in all the products 
  const findCategories = () => {
    const c1 = products.map(item => item.category);
    const c2 = new Set(c1);
    return [...c2]
  }

  // write in input and filtered product that their category have this leeter  
  const searchProduct = e => {
    setSearch(products.filter(item => item.category.includes(e.target.value)))
  }

  

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
                <button className={Styles.filterBTN} name={item} onClick={(e) => filterCategoryHandler(e)} key={item}>{item}</button>
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