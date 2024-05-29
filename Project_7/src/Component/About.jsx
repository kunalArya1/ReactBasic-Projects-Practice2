import React from "react";
import { useState } from "react";

/**  Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.
 
Data:
 const heading = 'About Me'
 const name = 'Preeti' // you can put your name
 const learning = 'I am learning React JS currently at neoG Camp.' */

const About = ({ heading, name, learning }) => {
  const [show, setshow] = useState(false);
  return (
    <div className=" text-center p-3">
      <p className=" font-bold italic">{heading}</p>
      <h2 className=" font-semibold italic mb-4">{name}</h2>
      <button onClick={() => setshow(!show)} className=" p-2 bg-green-300 rounded-sm m-2">
        Know More
      </button>
      {show && <p className=" italic">{learning}</p>}
    </div>
  );
};

export default About;
