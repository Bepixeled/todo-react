import React from "react";
import TodoList from "./TodoList";
import Search from "./Search";
import DarkLight from "./Toggle";
import Footer from "./Footer";
import FilterItems from "./FilterItems";
import { useState, useEffect } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants";

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
    console.log("newItem()");
    const newItem = {
      id: idCount,
      isDone: false,
      dueDate: 0,
      text: TODO_DEFAULT_TEXT,
      focus: enableFocus,
    };
    const newTodos = [...todoItems, newItem];
    console.log(`todo items after newItem():`);
    console.log(newTodos);
    setTodoItems(newTodos);
    setIdCount(idCount + 1);
  };

  const changeItem = (id, isDone, dueDate, text, isNew) => {
    const changedItem = {
      id: id,
      isDone: isDone,
      dueDate: dueDate,
      text: text,
      isNew: isNew,
      focus: false,
    };
    const todoIndex = todoItems.findIndex((item) => item.id === id);
    const todos = todoItems;
    todos[todoIndex] = changedItem;
    setTodoItems(todos);
  };

  useEffect(() => newItem(false), []);

  return (
    <div>
      <div className="flex justify-center">
        {/* <img src="src/todo-or-not-todo.png" alt="Todo Or Not Todo" /> */}
        <img src="src/assets/todo-or-not-todo.svg" alt="Todo Or Not Todo" />
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-around max-w-[1280px] px-24 mx-auto">
        <FilterItems
          todoFilter={todoFilter}
          onTodoFilterChange={setTodoFilter}
        />
        <DarkLight />
      </div>
      <div className="flex justify-center">
        <TodoList
          todoItems={todoItemList}
          changeItem={changeItem}
          newItem={newItem}
        />
      </div>
      <div className="flex flex-col justify-end h-screen">
        <Footer />
      </div>
    </div>
  );
};

export default TodoContainer;
