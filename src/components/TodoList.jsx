import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  const [idCount, setIdCount] = useState(3);
  const [todoItems, setTodoItems] = useState([
    { id: 0, done: false, dueDate: 0, text: "Item 1" },
    { id: 1, done: true, dueDate: 0, text: "Item 2" },
    { id: 2, done: false, dueDate: 0, text: "Item 3" },
    { id: 3, done: true, dueDate: 0, text: "Item 4" },
  ]);

  const createDefaultItem = () => {
    setIdCount += 1;
    const newItem = {
      id: idCount,
      done: false,
      dueDate: 0,
      text: `item ${idCount}`,
    };
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div className="rounded overflow-hidden mx-auto mt-8 pt-6 pb-8 mb-4 w-5/6 md:w-3/5 flex justify-center">
      <ol className="flex justify-center flex-col items-center m-4 w-full">
        {todoItems.map((item) => {
          return (
            <Listitem key={item.id} item={item} createNew={createDefaultItem} />
          );
        })}
      </ol>
    </div>
  );
};
export default TodoList;
