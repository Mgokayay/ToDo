import { useSelector } from "react-redux";
import ToDoItem from "./TodoItem";

const ToDoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchsFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchsFilter && matchsSearch;
    });
  });

  console.log("Filtered Todos: ", filteredTodos);
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <ToDoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default ToDoList;