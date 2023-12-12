import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Todo List</h2>

        <ol className="justify-center flex-col items-center m-4">
          <li className="p-2 dark:bg-dark-secondary-200 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12 ">
            Test
          </li>
          <li className="p-2 dark:bg-dark-secondary-700 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12 ">
            Test
          </li>
          {todoItems.map((item, index) => {
            <li key={index}>
              <p>
                {index}: {item}
              </p>
            </li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
