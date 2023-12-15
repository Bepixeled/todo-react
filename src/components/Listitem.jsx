import { useEffect, useRef, useState } from "react";

export default function Listitem({
  item,
  changeItem,
  newItem,
  addNewTodoItem,
}) {
  const [text, setText] = useState(item.text);

  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    //86400 Seconds per day
    return Math.round(Date.now() / 1000);
  };

  // due variable for due state visuals
  const isDue = item.dueDate < getTimeStamp() ? true : false;
  //   getTimeStamp() + 5 * 86400,

  const handleFocus = () => {
    // console.log("handleFocus()");
    // changeItem(item.id, item.isDone, item.dueDate, "", item.isNew);
    setText("");
  };

  const handleChange = (e) => {
    // console.log(`handleChange: text input content: ${e.target.value}`);
    // console.log(event.key);
    // changeItem(item.id, item.isDone, item.dueDate, e.target.value, item.isNew);
    setText(e.target.value);
  };

  const handleBlur = () => {
    if (item.isNew) {
      newItem(item.id);
    }
  };

  // handles pressing enter by blurring the text input
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
      console.log(item);
      item.text = e.target.value;
      console.log(item);
      changeItem(item);
    }
  };

  return (
    <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
      <input
        type="text"
        value={text}
        autoFocus={item.focus}
        className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12 text-center"
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}
