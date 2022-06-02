import ReactDom from "react-dom/client"
// scss 
import "./index.scss";
// component 
import App from "./App.js";
// react router dom 
import { BrowserRouter } from "react-router-dom";
// bootstrap 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
// axios 
// import axios from "axios";
// axios.default.baseUrl =`https://fakestoreapi.com/products`;


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    < App />
  </BrowserRouter>
)