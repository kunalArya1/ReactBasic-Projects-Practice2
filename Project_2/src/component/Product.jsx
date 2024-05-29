import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h1 className=" text-blue-600 font-bold"> {name}</h1>
      <h1 className=" italic text-green-400">{price}</h1>
    </div>
  );
};

export default Product;
