// data 
import { getData } from "../../data/getData";
// localStorage 
import { products_LC } from "../../LC/localStorage";


export const productsLoading_AC = (data) => {
  return { type: "PRODUCTS_LOADING", payload: data }
}
export const productsFetched_AC = (data) => {
  return { type: "PRODUCTS_FETCHED", payload: data }
}
export const productsErrors_AC = (message) => {
  return { type: "PRODUCTS_ERRORS", payload: message }
}


const fetchData = () => {
  
  return async (dispatch) => {
    try {
      dispatch(productsLoading_AC(true))
      const res = await getData();
      products_LC(res)
      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC(res))
      dispatch(productsErrors_AC(null))
    } catch (error) {
      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC([]))
      dispatch(productsErrors_AC(error.message))
    }
  }
}

export default fetchData;
