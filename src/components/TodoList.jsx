import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const filteredTodos = useSelector((state) => {
		const todos = state.todos;
		const filter = state.filter;

		return todos.filter((todo) => {
			const matchesFilter =
				(filter === "COMPLETED" && todo.completed) ||
				(filter === "INCOMPLETE" && !todo.completed) ||
				filter === "ALL";

			return matchesFilter;
		});
	});

	return (
		<ul>
			{filteredTodos.map((todo, index) => (
				<TodoItem key={index} todo={todo} index={index} />
			))}
		</ul>
	);
};

export default TodoList;
