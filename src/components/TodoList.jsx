import React from "react";
import Listitem from "./Listitem";

const TodoList = ({
  todoItems,
  onChangeItem,
  onNewItem,
  addNewTodoItem,
  onDeleteTodoItem,
}) => {
  return (
    <div className="rounded overflow-hidden mx-auto mt-8 w-96 md:w-3/5 flex flrx-col justify-center">
      <ol className="flex justify-center flex-col items-center mb-10 w-96">
        {todoItems.map((item) => {
          return (
            <Listitem
              key={item.id}
              item={item}
              onChangeItem={onChangeItem}
              onNewItem={onNewItem}
              onDeleteTodoItem={onDeleteTodoItem}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
