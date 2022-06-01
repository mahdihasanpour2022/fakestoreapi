import React from 'react';
import { Provider } from 'react-redux';
import Store from "./redux/Store";
// components 
import Products from "./components/Products";

const App = () => {


  return (
    <>
      <Provider store={Store} >
        <Products />
      </Provider>
    </>
  );
};

export default App;