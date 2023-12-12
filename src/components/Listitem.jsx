export default function Listitem({ item }) {
  // Timstamp for Calculating due status
  const getTimeStamp = () => {
    return Math.round(Date.now() / 1000);
  };
  // due varuable for due state visuals
  const due = item.dueDate < getTimeStamp() ? true : false;

  return (
    <li className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12">
      <input
        type="text"
        className="dark:bg-dark-secondary-700 bg-light-primary-100 active:border-dark-accent1-300 w-9/12"
        data-done={item.done}
        data-due={due}
        value={item.text}
      />
    </li>
  );
}
