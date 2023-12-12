import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import DarkLight from "./components/Toggle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex justify-center"><img src="src/todo-or-not-todo.png" alt="Todo Or Not Todo" /></div>
      <div className="flex flex-col md:flex-row md:justify-between max-w-[1280px] px-24 mx-auto">

        <Search />
        <DarkLight />


      </div >

      <TodoList />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
