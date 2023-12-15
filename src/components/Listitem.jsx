import { useEffect, useRef, useState } from "react";

export default function Listitem({ item, changeItem, newItem }) {
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
    changeItem(item.id, item.isDone, item.dueDate, "", item.isNew);
    setText("");
  };

  const handleChange = (e) => {
    // console.log(`handleChange: text input content: ${e.target.value}`);
    // console.log(event.key);
    changeItem(item.id, item.isDone, item.dueDate, e.target.value, item.isNew);
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
    }
  };

  return (
    <li className="p-2 dark:bg-dark-secondary-600 bg-light-primary-200  bg-gray-200 w-9/12 h-12 flex items-center mb-4 justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(0,0,0,0.6)]" >
      <input
        type="text"
        value={text}
        autoFocus={item.focus}
        className="dark:bg-dark-secondary-600 bg-light-primary-200 active:border-dark-accent1-300 w-9/12 text-center"
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}
