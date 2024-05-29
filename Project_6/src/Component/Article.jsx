import React, { useState } from "react";

/**
 * 
 * Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

 Data:
 const title = 'React is awesome'
 const content = 'React is a JavaScript library for building user interfaces.'
 */
const Article = ({ title, content }) => {
  const [show, setshow] = useState(false);

  const showMoreHandle = () => {
    setshow(!show);
  };
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-center text-2xl p-5">Article Page</h1>
      <h1 className="font-semibold ">{title}</h1>
      <button className="p-2 bg-green-400 mt-4 rounded-sm" onClick={showMoreHandle}>Know More</button>
      {show && <p className=" font-semibold italic mt-4"> {content}</p>}
    </div>
  );
};

export default Article;
