import React from "react";
import Listitem from "./Listitem";

import Y from "./Y";
import X from "./x";

const TodoList = ({
  todoItems,
  onChangeItem,
  onNewItem,
  addNewTodoItem,
  onDeleteTodoItem,
}) => {
  return (
    <div className="rounded overflow-hidden mx-auto mt-8 w-5/6 md:w-3/5 flex justify-center ">
      <X/>
          <ol className="flex justify-center flex-col items-center mb-10 w-full">
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
          <Y/>
    </div>
  );
};

export default TodoList;
