const initialProductsState = {
  loading: false,
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
  error: null,
  categories: localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [],
  jewelery: localStorage.getItem("jewelery") ? JSON.parse(localStorage.getItem("jewelery")) : [],
}
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return { ...state, loading: action.payload };
    case "PRODUCTS_FETCHED":
      return { ...state, products: action.payload };
    case "PRODUCTS_ERRORS":
      return { ...state, error: action.payload };
    case "CATEGORIES_FETCHED":
      return { ...state, categories: action.payload };
    case "JEWELARY_FETCHED":
      return { ...state, jewelery: action.payload };
    default:
      return state;
  }
}
export default productsReducer;