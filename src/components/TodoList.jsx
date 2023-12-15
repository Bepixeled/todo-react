import React from "react";
import Listitem from "./Listitem";

<<<<<<< HEAD
import Y from "./Y";
import X from "./x";

const TodoList = ({ todoItems, changeItem, newItem }) => {
  return (
    <div className="rounded overflow-hidden mx-auto mt-8 w-5/6 md:w-3/5 flex justify-center ">
      <X/>
          <ol className="flex justify-center flex-col items-center mb-10 w-full">
            {todoItems.map((item) => {
              return (
                <Listitem
                  key={item.id}
                  item={item}
                  changeItem={changeItem}
                  newItem={newItem}
                />
              );
            })}
          </ol>
          <Y/>
=======
const TodoList = ({ todoItems, onChangeItem, onNewItem, addNewTodoItem }) => {
  return (
    <div className="rounded overflow-hidden mx-auto mt-8 w-5/6 md:w-3/5 flex justify-center">
      <ol className="flex justify-center flex-col items-center mb-10 w-full">
        {todoItems.map((item) => {
          return (
            <Listitem
              key={item.id}
              item={item}
              onChangeItem={onChangeItem}
              onNewItem={onNewItem}
              addNewTodoItem={addNewTodoItem}
            />
          );
        })}
      </ol>
>>>>>>> abb24e537e6e659bc571935e2d88b4c5c3f60561
    </div>
  );
};

export default TodoList;
