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
    console.log("IN::addnewTodoItem", item);
    let newTodoItems = todoItems;
    newTodoItems.push(item);

    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));

    console.log("IN::addnewTodoItem", todoItems);

    setTodoItems(newTodoItems);

    console.log("IN::addnewTodoItem", todoItems);
  }

  function onChangeItem(item) {
    const index = todoItems.findIndex((i) => i.id === item.id);
    console.log(index);
    let newTodoItems = todoItems;
    newTodoItems[index] = item;
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
    setTodoItems(newTodoItems);
  }

  // Executed on first render
  useEffect(() => {
    localStorage.setItem("theme", "light");
    if (
      localStorage.getItem("todoItems") === null ||
      localStorage.getItem("todoItems") === "[]" ||
      JSON.parse(localStorage.getItem("todoItems")).length === 0
    ) {
      console.error("USEEFFECT::ERROR should not be fired!");
      setTodoItems(JSON.parse(localStorage.getItem("todoItems")));
    }
  }, []);

  useEffect(() => {
    // console.log(localStorage.getItem("todoItems") != JSON.stringify(todoItems));
    // console.log(JSON.parse(localStorage.getItem("todoItems")));
    // console.log(todoItems);
    if (localStorage.getItem("todoItems") != JSON.stringify(todoItems)) {
      setTodoItems(JSON.parse(localStorage.getItem("todoItems")));
    }
  });

  // KEEP THIS !!! IN CASE TodoItems get LOST
  // Executed on every render
  // depends on state

  return (
    <>
      <TodoContainer
        todoItems={todoItems}
        addNewTodoItem={addNewTodoItem}
        onChangeItem={onChangeItem}
      />
    </>
  );
}

export default App;
