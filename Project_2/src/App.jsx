import React from "react";
import Product from "./component/Product";

/*

 Build a Product component that receives product name and price as props and displays them on DOM.
  
  The name should be in bold and blue in color
  Price should be in italics and green in colo
*/
const App = () => {
  return (
    <div>
      <Product name="Kunal Kumar" price="200$" />
    </div>
  );
};

export default App;
