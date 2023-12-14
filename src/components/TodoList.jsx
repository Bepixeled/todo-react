import React from "react";
import { useState, useEffect } from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  const [idCount, setIdCount] = useState(0);
  const [todoItems, setTodoItems] = useState([]);

  const createDefaultItem = (enableFocus = true) => {
    const newItem = {
      id: idCount,
      isDone: false,
      dueDate: 0,
      text: "Enter text...",
      isNew: true,
      focus: enableFocus,
    };
    setTodoItems([...todoItems, newItem]);
    setIdCount(idCount + 1);
  };

  const changeItem = (id, isDone, dueDate, text, isNew) => {
    console.log("change Item");
    console.log(`todo text: ${text}`);
    const changedItem = {
      id: id,
      isDone: isDone,
      dueDate: dueDate,
      text: text,
      isNew: isNew,
      focus: false,
    };
    const todoIndex = todoItems.findIndex((item) => item.id === id);
    console.log(`todo index: ${todoIndex}`);
    const todos = todoItems;
    todos[todoIndex] = changedItem;
    setTodoItems(todos);
    console.log(todoItems);
  };

  const newItem = (id) => {
    // console.log("newItem()");
    createDefaultItem();
  };

  useEffect(() => createDefaultItem(false), []);

  return (
    <div className="rounded overflow-hidden mx-auto mt-8 w-5/6 md:w-3/5 flex justify-center">
      <ol className="flex justify-center flex-col items-center mb-10 w-full">
        {todoItems.map((item) => {
          return (
            <Listitem
              key={item.id}
              item={item}
              changeItem={changeItem}
              newItem={newItem}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
