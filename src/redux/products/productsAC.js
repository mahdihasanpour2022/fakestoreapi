import { getData } from "../../data/getData";


const productsLoading_AC = () => {
  return { type: "PRODUCTS_LOADING", payload: true }
}
const productsFetched_AC = (data) => {
  return { type: "PRODUCTS_FETCHED", payload: data }
}
const productsErrors_AC = (message) => {
  return { type: "PRODUCTS_ERRORS", payload: message }
}


const fetchData = () => {
  return async (dispatch) => {
    dispatch(productsLoading_AC(true))
    try {
      const data = await getData();
      console.log(data)

      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC(data))
      dispatch(productsErrors_AC(null))
    } catch (error) {
      dispatch(productsLoading_AC(false))
      dispatch(productsFetched_AC(""))
      dispatch(productsErrors_AC(error.message))
    }
  }
}

export default fetchData;
