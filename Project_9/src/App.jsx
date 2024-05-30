import React from "react";
import ColorPicker from "./Component/ColorPicker";

/** Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.
 
Data:
 const red = '#EE4B2B'
 const blue = '#89CFF0'
 const green = '#7FFFD4' */

const App = () => {
  return (
    <div>
      <ColorPicker />
    </div>
  );
};

export default App;
