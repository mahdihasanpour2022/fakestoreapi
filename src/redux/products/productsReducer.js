const initialProductsState = {
  loading: false,
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []  ,
  error: null,
}
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return {...state , loading :action.payload};
    case "PRODUCTS_FETCHED":
      return {...state , products : action.payload};
    case "PRODUCTS_ERRORS":
      return {...state , error : action.payload};
    default:
      return state;
  }
}
export default productsReducer;