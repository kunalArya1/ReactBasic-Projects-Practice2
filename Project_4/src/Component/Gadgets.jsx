import React from "react";

/**
 *
 *
 * Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000
 *
 */

const Gadgets = ({ products }) => {
  return (
    <div className=" p-5">
      <h1 className=" font-bold text-2xl text-center">Gadgets App</h1>
      <ul>
        {products.map((product) => (
          <div key={product.description} className="p-4">
            <h1 className=" uppercase font-semibold"> {product.name}</h1>
            <h1>{product.description}</h1>
            <span className=" p-1 mt-3"
              style={{
                border: product.price > 5000 ? "1px solid black" : "none",
              }}
            >
              {product.price}
            </span>
            <hr className=" border-lime-300" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Gadgets;
