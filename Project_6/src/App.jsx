import React from "react";
import Article from "./Component/Article";

/**
 * 
 * Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

 Data:
 const title = 'React is awesome'
 const content = 'React is a JavaScript library for building user interfaces.'
 */
const App = () => {
  return (
    <div>
      <Article
        title={"React is awesome"}
        content={"React is a JavaScript library for building user interfaces."}
      />
    </div>
  );
};

export default App;
