import React, { useEffect } from 'react';
import fetchData from './redux/products/productsAC';
import { Provider } from 'react-redux';
import Store from "./redux/Store";
// components 
import Products from "./components/Products";

const App = () => {

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Provider store={Store} >
        <Products />
      </Provider>
    </>
  );
};

export default App;