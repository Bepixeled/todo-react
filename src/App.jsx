import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import DarkLight from "./components/Toggle";
import Footer from "./components/Footer";

function App() {
  return (
    <><div>
      <div className="flex justify-center"><img src="src/todo-or-not-todo.png" alt="Todo Or Not Todo" /></div>
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-around max-w-[1280px] px-24 mx-auto">

        <Search />
        <DarkLight />


      </div >
      <div className="flex justify-center">
        <TodoList /></div>
      <div>
        <Footer />
      </div></div>
    </>
  );
}

export default App;
