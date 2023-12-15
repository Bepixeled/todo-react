import { useState } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants.js";

export default function Listitem({
  item,
  changeItem,
  newItem,
  addNewTodoItem,
}) {
  const [text, setText] = useState(item.text);
  const [isNew, setIsNew] = useState(true);

  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    // 86400 Seconds per day
    return Math.round(Date.now() / 1000);
  };

  // due variable for due state visuals
  const isDue = item.dueDate < getTimeStamp() ? true : false;
  // getTimeStamp() + 5 * 86400,

  const changeText = (text) => {
    changeItem(item.id, item.isDone, item.dueDate, text, isNew);
    setText(text);
  };

  const toggleNew = () => {
    changeItem(item.id, item.isDone, item.dueDate, item.text, !isNew);
    setIsNew(!isNew);
  };

  const handleFocus = () => {
    if (isNew && text === TODO_DEFAULT_TEXT) {
      changeText("");
    }
  };

  const handleChange = (e) => {
    changeText(e.target.value);
  };

  const handleBlur = () => {
    if (isNew) {
      newItem(false);
      toggleNew();
    }
  };

  // handles pressing enter by blurring the text input
  const handleKeyDown = (e) => {
    console.log(`isNew: ${isNew}`);
    if (e.keyCode === 13) {
      if (isNew) {
        newItem(true);
        toggleNew();
      console.log(item);
      item.text = e.target.value;
      console.log(item);
      changeItem(item);
      }
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
