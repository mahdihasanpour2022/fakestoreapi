import React from 'react';
import { Provider } from 'react-redux';
import Store from "./redux/Store";
import {Routes , Route , Navigate} from "react-router-dom";

// components 
import Home from "./components/Home";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";


const App = () => {


  return (
    <>
      <Provider store={Store} >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/notfound" element={<NotFound />}/>
          <Route path="/*" element={<Navigate to="/notfound" />}/>
        </Routes>
      </Provider>
    </>
  );
};

export default App;