// data 
import { getData } from "../../data/getData";
// localStorage 
import { products_LC,jewelery_LC,categories_LC } from "../../LC/localStorage";


const productsLoading_AC = (data) => {
  return { type: "PRODUCTS_LOADING", payload: data }
}
const productsFetched_AC = (data) => {
  return { type: "PRODUCTS_FETCHED", payload: data }
}
const productsErrors_AC = (message) => {
  return { type: "PRODUCTS_ERRORS", payload: message }
}
const CategoriesFetched_AC = (data) => {
  return { type: "CATEGORIES_FETCHED", payload: data }
}
const jeweleryFetched_AC = (data) => {
  return { type: "JEWELARY_FETCHED", payload: data }
}

const fetchData = () => {
  
  return async (dispatch) => {
    try {
      dispatch(productsLoading_AC(true))
      const res = await getData();
      // console.log(res)
      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC(res[2].data))
      dispatch(productsErrors_AC(null))
      products_LC(res[2].data)
      
      dispatch(CategoriesFetched_AC(res[0].data))
      categories_LC(res[0].data)
      dispatch(jeweleryFetched_AC(res[1].data))
      jewelery_LC(res[1].data)
    } catch (error) {
      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC([]))
      dispatch(productsErrors_AC(error.message))
    }
  }
}

export default fetchData;
