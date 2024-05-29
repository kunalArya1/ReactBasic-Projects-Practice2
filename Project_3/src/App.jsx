import React from "react";
import UserProfile from "./Component/UserProfile";

/*

 Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.
 
 Data:
 const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
 }

*/
const App = () => {
  const userData = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  return (
    <div>
      <UserProfile userDetails={userData} />
    </div>
  );
};

export default App;
