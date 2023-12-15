import React from "react";
import TodoList from "./TodoList";
import Search from "./Search";
import DarkLight from "./Toggle";
import Footer from "./Footer";
import FilterItems from "./FilterItems";
import { useState, useEffect } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants";

const TodoContainer = ({
  todoItems,
  addNewTodoItem,
  onChangeItem,
  onDeleteTodoItem,
}) => {
  const [idCount, setIdCount] = useState(0);
  const [todoFilter, setTodoFilter] = useState("all");

  useEffect(() => {
    if (idCount === 0) {
      setIdCount(todoItems.length);
    }
  });

  let todoItemList = [];
  // Item Filter Logic
  // If todoFilter is all take the unchanged todoitem List
  switch (todoFilter) {
    case "completed":
      todoItemList = todoItems.filter((todo) => todo.isDone === true);
      break;
    case "uncompleted":
      todoItemList = todoItems.filter((todo) => todo.isDone === false);
      break;
    default:
      todoItemList = todoItems;
      break;
  }

  const onNewItem = (enableFocus = false) => {
    console.log("newItem()");
    const newItem = {
      id: idCount,
      isDone: false,
      dueDate: 0,
      text: TODO_DEFAULT_TEXT,
      focus: enableFocus,
      isNew: true,
    };
    // const newTodos = [...todoItems, newItem];
    // console.log(`todo items after newItem():`);
    // console.log(newTodos);
    // setTodoItems(newTodos);
    addNewTodoItem(newItem);
    setIdCount(idCount + 1);
  };

  useEffect(() => {
    if (
      localStorage.getItem("todoItems") === null ||
      localStorage.getItem("todoItems") === "[]" ||
      JSON.parse(localStorage.getItem("todoItems")).length === 0
    ) {
      console.log("EUSEFFECT::ERROR: should not be fired");
      onNewItem(false);
    }
  }, []);

  return (
    <div className="h-full">
      <div className="flex justify-center min">
        {/* <img src="src/todo-or-not-todo.png" alt="Todo Or Not Todo" /> */}
        <img
          src="src/assets/todo-or-not-todo.svg"
          alt="Todo Or Not Todo"
          className="m-8 w-80"
        />
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
          onChangeItem={onChangeItem}
          onNewItem={onNewItem}
          onDeleteTodoItem={onDeleteTodoItem}
        />
      </div>
      <div className="flex flex-col justify-end  items-stretch">
        <Footer />
      </div>
    </div>
  );
};

export default TodoContainer;
