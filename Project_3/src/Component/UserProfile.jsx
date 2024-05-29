import React from "react";
/*

 Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.
 
 Data:
 const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
 }

*/
const UserProfile = ({ userDetails }) => {
  return (
    <div>
      <h1>{userDetails.name}</h1>
      <h1>{userDetails.age}</h1>
      <h1>{userDetails.email}</h1>
    </div>
  );
};

export default UserProfile;
