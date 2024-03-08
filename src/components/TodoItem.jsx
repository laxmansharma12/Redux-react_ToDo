import { useDispatch } from "react-redux";
import {
	MdDelete,
	MdCheckBoxOutlineBlank,
	MdOutlineCheckBox,
} from "react-icons/md";

import {
	removeTodo,
	markCompleted,
	markIncomplete,
	editTodo,
} from "../redux/actions";
const TodoItem = ({ todo, index }) => {
	const dispatch = useDispatch();

	const handelEdit = (e) => {
		const newText = e.target.value;
		if (newText.trim() !== "") {
			dispatch(editTodo(index, newText.trim()));
		}
	};

	return (
		<li className="listITem">
			{!todo.completed && (
				<button
					className="unchecked"
					onClick={() => dispatch(markCompleted(index))}
				>
					<MdCheckBoxOutlineBlank />
				</button>
			)}
			{todo.completed && (
				<button
					className="checked"
					onClick={() => dispatch(markIncomplete(index))}
				>
					<MdOutlineCheckBox />
				</button>
			)}

			<div className="itemContainer">
				<input
					className="item"
					style={{
						textDecoration: todo.completed ? "line-through" : "none",
					}}
					type="text"
					value={todo.text}
					onChange={(e) => handelEdit(e)}
				/>
				<MdDelete
					className="removeBtn"
					onClick={() => dispatch(removeTodo(index))}
				/>
			</div>
		</li>
	);
};

export default TodoItem;
