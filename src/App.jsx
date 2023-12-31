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
    let newTodoItems = todoItems;
    newTodoItems[index] = item;
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
    setTodoItems(newTodoItems);
  }

  function onDeleteTodoItem(id) {
    const index = todoItems.findIndex((i) => i.id === id);
    console.log(index);
    let newTodoItems = todoItems.filter((item) => item.id !== id);
    // Cleanup Items after Delete
    for (let index = 0; index < newTodoItems.length; index++) {
      newTodoItems[index].id = index;
    }
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
    if (localStorage.getItem("todoItems") != JSON.stringify(todoItems)) {
      setTodoItems(JSON.parse(localStorage.getItem("todoItems")));
    }
  });

  return (
    <>
      <TodoContainer
        todoItems={todoItems}
        addNewTodoItem={addNewTodoItem}
        onChangeItem={onChangeItem}
        onDeleteTodoItem={onDeleteTodoItem}
      />
    </>
  );
}

export default App;
