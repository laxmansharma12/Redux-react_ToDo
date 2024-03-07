import {
	ADD_TODO,
	REMOVE_TODO,
	MARK_COMPLETED,
	MARK_INCOMPLETE,
	FILTER_TODOS,
	EDIT_TODO,
} from "./actionTypes";

const initialState = { todos: [], filter: "ALL" };

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{ text: action.payload.text, completed: false },
				],
				filter: state.filter,
			};

		case REMOVE_TODO:
			return {
				todos: state.todos.filter((todo, index) => index !== action.payload.id),
				filter: state.filter,
			};

		case MARK_COMPLETED:
			return {
				todos: state.todos.map((todo, index) =>
					index === action.payload.id ? { ...todo, completed: true } : todo
				),
				filter: state.filter,
			};

		case MARK_INCOMPLETE:
			return {
				todos: state.todos.map((todo, index) =>
					index === action.payload.id ? { ...todo, completed: false } : todo
				),
				filter: state.filter,
			};

		case FILTER_TODOS:
			return {
				todos: state.todos,
				filter: action.payload.filter,
			};

		case EDIT_TODO:
			return {
				todos: state.todos.map((todo, index) =>
					index === action.payload.id
						? { ...todo, text: action.payload.newText }
						: todo
				),
				filter: state.filter,
			};

		default:
			return state;
	}
};

export default todoReducer;
