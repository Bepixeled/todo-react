import React from "react";
import TodoList from "./TodoList";
import Search from "./Search";
import DarkLight from "./Toggle";
import Footer from "./Footer";
import FilterItems from "./FilterItems";
import { useState, useEffect } from "react";

const TodoContainer = () => {
  const [idCount, setIdCount] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [todoFilter, setTodoFilter] = useState("all");

  let todoItemList = [];
  // Item Filter Logic
  switch (todoFilter) {
    case "completed":
      todoItemList = todoItems.filter((todo) => todo.isDone === true);
      break;
    case "uncompleted":
      todoItemList = todoItems.filter((todo) => todo.isDone === false);
      break;
    default:
      // If todoFilter is all take the unchanged todoitem List
      todoItemList = todoItems;
      break;
  }

  const newItem = (enableFocus = false) => {
    const newItem = {
      id: idCount,
      isDone: false,
      dueDate: 0,
      text: "Enter text...",
      isNew: true,
      focus: false,
    };
    setTodoItems([...todoItems, newItem]);
    setIdCount(idCount + 1);
  };

  const changeItem = (id, isDone, dueDate, text, isNew) => {
    // console.log("change Item");
    // console.log(`todo text: ${text}`);
    const changedItem = {
      id: id,
      isDone: isDone,
      dueDate: dueDate,
      text: text,
      isNew: isNew,
      focus: false,
    };
    const todoIndex = todoItems.findIndex((item) => item.id === id);
    // console.log(`todo index: ${todoIndex}`);
    const todos = todoItems;
    todos[todoIndex] = changedItem;
    setTodoItems(todos);
    // console.log(todoItems);
  };

  useEffect(() => newItem(false), []);

  return (
    <div className="h-full">
      <div className="flex justify-center min">
        {/* <img src="src/todo-or-not-todo.png" alt="Todo Or Not Todo" /> */}
        <img src="src/assets/todo-or-not-todo.svg" alt="Todo Or Not Todo" className="m-8 w-80" />
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-around max-w-[1280px] px-24 mx-auto">
        <FilterItems
          todoFilter={todoFilter}
          onTodoFilterChange={setTodoFilter}
        />
        <DarkLight />
      </div>
      <div className="flex justify-center items-start min-h-screen">
        <TodoList
          todoItems={todoItemList}
          changeItem={changeItem}
          newItem={newItem}
        />
      </div>
      <div className="flex flex-col justify-end  items-stretch">
        <Footer />
      </div>
    </div>
  );
};

export default TodoContainer;
