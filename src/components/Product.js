import React from 'react';

const Product = ({ eachProductData }) => {



  // destructuring each product data
  // const {Category,CustomerReviews,Discounted_price,SKU,Tags,color,detail,id,image_src1,image_src2,real_price,sizes,title } = eachProductData;
  const { id } = eachProductData;

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default Product;