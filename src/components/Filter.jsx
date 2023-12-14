import React, { useState } from 'react';
import Listitem from './Listitem';
import TodoList from './TodoList';
import todos from './TodoList';
import TodoContainer from '../App';



const FilterItems = () => {

    const Todotofilter = Object.values(todos);

    const [filter, setFilter] = useState('all');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodoItems = Todotofilter.filter((todos) => {
        switch (filter) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.isDone === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos)
                break;

        };
    })
    return (
        <div className="mb-3 xl:w-96">
            <div className="relative mb-4 flex w-full  items-stretch">
                <select className="select select-accent w-full max-w-xs" value={filter} onChange={handleFilterChange}>
                    <option value="all">All Todos</option>
                    <option value="completed">Completed Todos</option>
                    <option value="uncompleted">Uncompleted Todos</option>
                </select>
            </div>
            <div className="w-full h-auto"><ul>

            </ul>
            </div>
        </div>
    );

}

export default FilterItems;