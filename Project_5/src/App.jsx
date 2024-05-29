import React from "react";
import Phone from "./Component/Phone";
import { products } from "./utils/data";

/** Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM. */
const App = () => {
  return (
    <div>
      <Phone productDetails={products} />
    </div>
  );
};

export default App;
