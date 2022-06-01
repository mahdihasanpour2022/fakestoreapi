import ReactDom from "react-dom/client"
// scss 
import "./index.scss";
// component 
import App from "./App.js";
// react router dom 
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    < App />
  </BrowserRouter>
)