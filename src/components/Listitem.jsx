import { useEffect, useState } from "react";
import TODO_DEFAULT_TEXT from "../constants/constants.js";
import AccomplishItem from "./AccomplishItem.jsx";
import DeleteItem from "./DeleteItem.jsx";

export default function Listitem({
  item,
  onChangeItem,
  onNewItem,
  onDeleteTodoItem,
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
    // changeItem(item);
    setText(text);
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

  const baseClasses = `p-2 dark:bg-light-secondary-900 bg-light-primary-200  
bg-gray-200 w-9/12 h-12 flex items-center mb-4 justify-center 
shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(0,0,0,0.6)]`;

  const bgColor =
    item.isDone === true
      ? " dark:bg-dark-secondary-600"
      : " dark:bg-light-primary-200";
  useEffect(() => console.log(bgColor), []);

  const finalClassNames = baseClasses + bgColor;

  return (
    <div className="flex flex-row w-96">
      <DeleteItem onDeleteTodoItem={onDeleteTodoItem} item={item} />
      <li className={finalClassNames}>
        <input
          type="text"
          value={text}
          autoFocus={item.focus}
          className="dark:bg-dark-secondary-600 bg-light-primary-200 active:border-dark-accent1-300 w-9/12 text-center"
          onFocus={handleTextFocus}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}

        // onBlur={handleBlur}
        />
      </li>
      <AccomplishItem onChangeItem={onChangeItem} item={item} />
    </div>
  );
}
