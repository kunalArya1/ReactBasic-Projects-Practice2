import React from "react";
import Todo from "./Component/Todo";
import { todoItems } from "./utils/data";

/** Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color */

const App = () => {
  return (
    <div className=" h-screen w-screen bg-gray-700">
      <Todo todoItems={todoItems} />
    </div>
  );
};

export default App;
