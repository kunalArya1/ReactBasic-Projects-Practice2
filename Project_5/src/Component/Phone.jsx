import React from "react";

/** Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM. */

const Phone = ({ productDetails }) => {
  const phoneData = productDetails.filter(
    (product) => product.name == "mobile"
  );
  return (
    <div>
      <h1>Phone Details </h1>
      <ul>
        {phoneData.map((phone) => (
          <div>
            <h1>{phone.name}</h1>
            <h1>{phone.description}</h1>
            <h1>{phone.price}</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Phone;
