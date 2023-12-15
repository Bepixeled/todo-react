import React from "react";
import TodoList from "./TodoList";
import Search from "./Search";
import DarkLight from "./Toggle";
import Footer from "./Footer";
import FilterItems from "./FilterItems";
import { useState, useEffect } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants";

const TodoContainer = ({ todoItems, addNewTodoItem , onChangeItem}) => {
  const [idCount, setIdCount] = useState(todoItems.length);
  const [todoFilter, setTodoFilter] = useState("all");

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
    <div>
      <div className="flex justify-center p-12">
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
          onChangeItem={onChangeItem}
          onNewItem={onNewItem}
          // addNewTodoItem={addNewTodoItem}
        />
      </div>
      <div className="flex flex-col justify-end h-screen">
        <Footer />
      </div>
    </div>
  );
};

export default TodoContainer;
