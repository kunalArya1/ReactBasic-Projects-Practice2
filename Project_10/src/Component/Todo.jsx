import React from "react";

/** Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color */

const Todo = ({ todoItems }) => {
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-xl italic p-4">Todo List Mini App</h1>
      <div className="flex justify-center">
        <div className="w-1/2">
          {todoItems.map((todo) => (
            <div key={todo.id} className="border p-2 my-2">
              <h2
                className={todo.isCompleted ? "text-green-500" : "text-red-500"}
              >
                {todo.title}
              </h2>
              <p
                className={todo.isCompleted ? "text-green-500" : "text-red-500"}
              >
                {todo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
