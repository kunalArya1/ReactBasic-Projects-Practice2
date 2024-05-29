import React from "react";
import { products } from "./utils/data";
import Gadgets from "./Component/Gadgets";
/**
 *
 *
 * Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000
 *
 */
const App = () => {
  return (
    <div>
      <Gadgets products={products} />
    </div>
  );
};

export default App;
