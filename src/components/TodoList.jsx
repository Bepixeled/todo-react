import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 0,
      text: "Enter text...",
      done: false,
    },
  ]);

  return (
    <div className="rounded overflow-hidden max-w-xl mx-auto mt-8 pt-6 pb-8 mb-4">
      <ol className="justify-center flex-col items-center m-4">
        {todoItems.map((item, index) => {
          <li key={index}>
            <p>
              {index}: {item}
            </p>
          </li>;
        })}
      </ol>
    </div>
  );
};

export default TodoList;
