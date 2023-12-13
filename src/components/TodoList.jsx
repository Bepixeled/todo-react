import React from "react";
import { useState, useEffect } from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  const [idCount, setIdCount] = useState(0);
  const [todoItems, setTodoItems] = useState([]);

  const createDefaultItem = () => {
    const newItem = {
      id: idCount,
      isDone: false,
      dueDate: 0,
      text: "Enter text...",
      isNew: true,
    };
    setTodoItems([...todoItems, newItem]);
    setIdCount(idCount + 1);
  };

  const changeItem = (id, isDone, dueDate, text, isNew) => {
    console.log("change Item");
    const changedItem = {
      id: id,
      isDOne: isDone,
      dueDate: dueDate,
      text: text,
      isNew: isNew,
    };
    const todoIndex = todoItems.findIndex((item) => item.id === id);
    const todos = todoItems;
    todos[todoIndex] = changedItem;
    setTodoItems(todos);
  };

  const newItem = (id) => {
    console.log("newItem()");
    createDefaultItem();
  };

  useEffect(createDefaultItem, []);

  return (
    <div className="rounded overflow-hidden mx-auto mt-8 pt-6 pb-8 mb-4 w-5/6 md:w-3/5 flex justify-center">
      <ol className="flex justify-center flex-col items-center m-4 w-full">
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
