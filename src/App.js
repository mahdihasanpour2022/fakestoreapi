import React, { useEffect, useCallback } from 'react';
import { getData } from "./data/getData";

const App = () => {


  const fetchData = useCallback(async () => {
    try {
      const data = await getData();
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      app

    </>
  );
};

export default App;