import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

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
    <div className="rounded overflow-hidden max-w-xl mx-auto mt-8 pt-6 pb-8 mb-4">
      <ol className="justify-center flex-col items-center m-4">
        <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12 ">
          Enter text...
        </li>

        {todoItems.map((item) => {
          return <Listitem key={item.id} item={item} />;
        })}
      </ol>
    </div>
  );
};
export default TodoList;