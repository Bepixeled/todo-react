import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  let [idCount, setIdCount] = useState(3);
  let [todoItems, setTodoItems] = useState([
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

  const changeItem = (value, id, dueDate, isNew) => {
    console.log("change Item");
    todoItems[id].text = value;
    todoItems[id].dueDate = dueDate;
    if (isNew) createDefaultItem();
  };

  const isDone = (id,isDone) => {
    // if (todoItems[id].done !== isDone) todoItems[id].done = isDone;
  };

  return (
    <div className="rounded overflow-hidden max-w-xl mx-auto mt-8 pt-6 pb-8 mb-4">
      <ol className="justify-center flex-col items-center m-4">
        {todoItems.map((item) => {
          return (
            <Listitem
              key={item.id}
              item={item}
              changeItem={changeItem}
              isDone={isDone}
            />
          );
        })}
      </ol>
    </div>
  );
};
export default TodoList;
