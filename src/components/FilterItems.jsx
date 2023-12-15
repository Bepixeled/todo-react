const FilterItems = ({ todoFilter, onTodoFilterChange }) => {
  return (
    <div className="mb-3 xl:w-96">
      <div className="relative mb-4 flex w-full  items-stretch">
        <form>
          <select
            className="select select-accent w-full max-w-xs dark:bg-dark-primary-500"
            value={todoFilter}
            onChange={(e) => onTodoFilterChange(e.target.value)}
          >
            <option value="all">All Todos</option>
            <option value="completed">Completed Todos</option>
            <option value="uncompleted">Uncompleted Todos</option>
          </select>
        </form>
      </div>
      <div className="w-full h-auto"></div>
    </div>
  );
};

export default FilterItems;
