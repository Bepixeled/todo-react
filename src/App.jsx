import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.theme = "light";
  }, []);

  return (
    <>
      <TodoContainer />
    </>
  );
}

export default App;
