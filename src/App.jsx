import { useState } from "react";
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import DarkLight from "./components/Toggle";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <Search />
        <DarkLight />
      </div >
      <TodoList />
    </>
  );
}

export default App;
