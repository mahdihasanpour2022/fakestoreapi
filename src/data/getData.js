import axios from "axios";


// export const getData = async () => {
//   const response = await axios.get(`https://fakestoreapi.com/products`);
//   return response.data;
// }

export const getData = async () => {
  const res = await axios.all([axios.get(`https://fakestoreapi.com/products/categories`), axios.get(`https://fakestoreapi.com/products/category/jewelery`),axios.get(`https://fakestoreapi.com/products`)])
  return res;
}

