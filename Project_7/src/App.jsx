import React from "react";
import About from "./Component/About";

/**  Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.
 
Data:
 const heading = 'About Me'
 const name = 'Preeti' // you can put your name
 const learning = 'I am learning React JS currently at neoG Camp.' */
const App = () => {
  return (
    <div>
      <About
        heading={"About Me"}
        name={"Preeti"}
        learning={"I am learning React JS currently at neoG Camp."}
      />
    </div>
  );
};

export default App;
