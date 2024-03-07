// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../redux/actions";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div>
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Active</option>
      </select>
    </div>
  );
};

export default FilterButtons;
