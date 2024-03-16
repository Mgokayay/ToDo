import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import ToDoList from "./ToDoList";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToDo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddToDoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddToDo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  // console.log(newTodoText);
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>
      {/* input text and btn */}
      <div className="flex items-center">
        <input
          value={newTodoText}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none "
          onClick={handleAddToDoClick}
        >
          <BsPlus />
        </button>
      </div>
      {/* {filter and search} */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center my-4">
          <input
            value={searchTerm}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ">
            <BsSearch />
          </button>
        </div>
      </div>
      <ToDoList />
    </div>
  );
};

export default Todo;
