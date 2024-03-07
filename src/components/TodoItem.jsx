import { useDispatch } from "react-redux";
import { removeTodo, markCompleted, markIncomplete } from "../redux/actions";
const TodoItem = ({ todo, index }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<div>
				<span>{index + 1}.</span>
				<span
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				>
					{todo.text}
				</span>
			</div>
			<div>
				<button onClick={() => dispatch(removeTodo(index))}>Delete</button>
				{!todo.completed && (
					<button onClick={() => dispatch(markCompleted(index))}>🮱</button>
				)}
				{todo.completed && (
					<button onClick={() => dispatch(markIncomplete(index))}>x</button>
				)}
			</div>
		</li>
	);
};

export default TodoItem;
