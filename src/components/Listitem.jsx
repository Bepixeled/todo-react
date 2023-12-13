import { useRef } from "react";

export default function Listitem({ item, changeItem, newItem }) {
  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    //86400 Seconds per day
    return Math.round(Date.now() / 1000);
  };

  // due variable for due state visuals
  const isDue = item.dueDate < getTimeStamp() ? true : false;

  const handleFocus = () => {
    changeItem(item.id, "", getTimeStamp() + 5 * 86400, item.isNew);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.key);
    changeItem(
      item.id,
      event.target.value,
      getTimeStamp() + 5 * 86400,
      item.isNew
    );
  };

  const handleBlur = () => {
    console.log("onBlur");
    if (item.isNew) {
      console.log("Item is new.");
      newItem(item.id);
    }
  };

  return (
    <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
      <input
        type="text"
        className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12 text-center"
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </li>
  );
}
