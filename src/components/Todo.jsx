import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { addTodo } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div>
      <h4>ToDo </h4>
      <div>
        <input
          type="text"
          id="addTodoInput"
          placeholder="Type your Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodoClick}> + </button>
      </div>

      <div>
        <FilterButtons />
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
