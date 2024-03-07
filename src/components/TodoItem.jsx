import { useDispatch } from "react-redux";
import { useState } from "react";
import {
	removeTodo,
	markCompleted,
	markIncomplete,
	editTodo,
} from "../redux/actions";
const TodoItem = ({ todo, index }) => {
	const dispatch = useDispatch();

	const [editedTodo, setEditedTodo] = useState(todo.text);

	const handelEdit = (e) => {
		const newText = e.target.value;
		setEditedTodo(newText);
		if (newText.trim() !== "") {
			dispatch(editTodo(index, newText.trim()));
		}
	};

	return (
		<li>
			<div>
				<span>{index + 1}.</span>
				<input
					style={{
						textDecoration: todo.completed ? "line-through" : "none",
						border: "none",
					}}
					type="text"
					value={editedTodo}
					onChange={(e) => handelEdit(e)}
				/>
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
