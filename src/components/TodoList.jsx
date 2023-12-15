import React from "react";
import Listitem from "./Listitem";

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
    </div>
  );
};

export default TodoList;
