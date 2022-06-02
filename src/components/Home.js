import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
// action creator 
import fetchData from '../redux/products/productsAC';
// scss 
import Styles from "../assets/styles/components styles/Home.module.scss";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <>
    <div className={Styles.home} >here is home</div>
    
    </>
  );
};

export default Home;