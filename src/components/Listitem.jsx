import { useRef } from "react";

export default function Listitem(props, changeItem) {
  const item = props.item;
  const isNew = item.dueDate === 0;
  const textRef = useRef();

  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    //86400 Seconds per day
    return Math.round(Date.now() / 1000);
  };

  // due variable for due state visuals
  const isDue = item.dueDate < getTimeStamp() ? true : false;

  const handleChange = (event) => {
    // console.log(event.target.value);
    if (event.key === "Enter") {
      console.log(event.key);
      changeItem(
        item.id,
        event.target.value,
        getTimeStamp() + 5 * 86400,
        isNew
      );
    }
  };

  return (
    <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
      <input
        type="text"
        className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12 text-center"
        // data-done={item.done}
        // data-due={isDue}
        ref={textRef}
        onChange={handleChange}
        // onDrop={item.isDone(item.id, true)}
      />
    </li>
  );
}
