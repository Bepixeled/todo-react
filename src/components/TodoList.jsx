import React from "react";
import Listitem from "./Listitem";

const TodoList = () => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Todo List</h2>

        <ol className="justify-center flex-col items-center m-4">
          <Listitem />
          <Listitem />
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
