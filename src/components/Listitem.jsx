export default function Listitem({ item, changeItem, isDone }) {
  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    //86400 Seconds per day
    return Math.round(Date.now() / 1000);
  };

  // due varuable for due state visuals
  const due = item.dueDate < getTimeStamp() ? true : false;

  // If dueDate === new Create a new Listitem
  if (item.dueDate === 0) {
    return (
      <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
        <input
          type="text"
          className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12"
          data-done={item.done}
          data-due={due}
          value={item.text}
          onKeyDown={(event) => {
            // console.log(event.target.value);
            if (event.key === "Enter") {
              console.log(event.key);
              changeItem(
                event.target.value,
                item.id,
                getTimeStamp() + 5 * 86400,
                true
              );
            }
          }}
          // onDrop={isDone(item.id, true)}
        />
      </li>
    );
  } else {
    return (
      <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
        <input
          type="text"
          className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12"
          data-done={item.done}
          data-due={due}
          // value={item.text}
          onKeyDown={(event) => {
            event.preventDefault();
            if (event.key === "Enter") {
              changeItem(event.target.value, item.id, item.duDate, false);
            }
          }}
          // onDrop={isDone(item.id, true)}
        />
      </li>
    );
  }
}
