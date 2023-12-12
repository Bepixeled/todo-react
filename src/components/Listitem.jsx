export default function Listitem({item}) {
  return (
    <li
      data-due="false"
      data-done="false"
      className="p-2 dark:bg-dark-secondary-700 bg-light-primary-100 border-b-2 border-solid dark:border-blue-200 bg-gray-200 border-gray-700 w-9/12"
    >
      <span>{item.text}</span>
    </li>
  );
}
