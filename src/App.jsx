import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Check on first run
  if (localStorage.getItem("todoItems") === null) {
    localStorage.setItem("todoItems", JSON.stringify([]));
  }

  //   {
  //   id: 0,
  //   isDone: false,
  //   dueDate: 0,
  //   text: "Enter text...",
  //   isNew: true,
  //   focus: true,
  // },

  function addNewTodoItem(item) {
    let newTodoItems = todoItems;
    newTodoItems.push(item);
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
    setTodoItems(newTodoItems);
  }

  // Executed on first render
  useEffect(() => {
    localStorage.setItem("theme", "light");
    setTodoItems(JSON.parse(localStorage.getItem("todoItems")));
  }, []);

  // KEEP THIS !!! IN CASE TodoItems get LOST
  // Executed on every render
  useEffect(() => {
    // setTodoItems(JSON.parse(localStorage.getItem("todoItems")));
  });

  return (
    <>
      <TodoContainer todoItems={todoItems} addNewTodoItem={addNewTodoItem} />
    </>
  );
}

export default App;
