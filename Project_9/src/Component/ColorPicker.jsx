import React, { useState } from "react";

/** Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.
 
Data:
 const red = '#EE4B2B'
 const blue = '#89CFF0'
 const green = '#7FFFD4' */

const ColorPicker = () => {
  const [selectedIndex, setselectedIndex] = useState(null);
  const data = [
    { color: "#EE4B2B", name: "Red" },
    { color: "#89CFF0", name: "Blue" },
    { color: "#7FFFD4", name: "Green" },
  ];
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-center m-5">ColorPicker App </h1>
      <div>
        {data.map((color, index) => (
          <>
            <button
              onClick={() => setselectedIndex(index)}
              className=" px-4 py-2 m-4 border rounded-md border-black "
            >
              {color.name}
            </button>
            <br />
            {selectedIndex === index && <p>{color.color}</p>}
          </>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
