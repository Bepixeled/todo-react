import { useState } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants.js";

export default function Listitem({ item, onChangeItem, onNewItem, addNewTodoItem }) {
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
    // changeItem(item);
    setText(text);
  };

  const toggleNew = () => {
    // item.isNew = !isNew;
    // onNewItem(true);
    // setIsNew(false);
  };

  const handleTextFocus = () => {
    if (isNew && text === TODO_DEFAULT_TEXT) {
      changeText("");
    }
  };

  const handleTextChange = (e) => {
    changeText(e.target.value);
  };

  const handleBlur = () => {
    if (isNew) {
      onNewItem(false);
      onNewItem(false);
      // toggleNew();
    }
  };

  // handles pressing enter by blurring the text input
  const handleKeyDown = (e) => {
    console.log(`isNew: ${isNew}`);
    if (e.keyCode === 13) {
      if (isNew) {
        console.log("__ENTER__");
        onNewItem(true);
        setIsNew(false);
        // console.log(item);
        item.text = e.target.value;
        item.isNew = false;
        // console.log(item);
        onChangeItem(item);
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
        onFocus={handleTextFocus}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        // onBlur={handleBlur}
      />
    </li>
  );
}
