import productsReducer from "./products/productsReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  productsState :productsReducer
})

export default rootReducer;