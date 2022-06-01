import React from 'react';
import { Provider } from 'react-redux';
import Store from "./redux/Store";
import {Routes , Route , Navigate} from "react-router-dom";

// components 
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {


  return (
    <>
      <Provider store={Store} >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </Provider>
    </>
  );
};

export default App;