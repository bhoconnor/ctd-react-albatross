import React from "react";
import style from "./TodoListItem.module.css";
// For getting around template literals for assigning multiple styles
import cs from "classnames";

// ************************************************************************************************************************ //
//TO DO LIST ITEM FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
const TodoListItem = ({ item, onRemoveTodo, todoID }) => {
  return (
    <li key={todoID} className={style.listItem}>
      {/* Changed below from {item.title} to item.fields.Title in 1-8*/}
      {item.fields.Title}
      <button
        type="button"
        onClick={() => onRemoveTodo(todoID)}
        className={cs(style.button, style.buttonSmall)}
      >
        x
      </button>
    </li>
  );
};

export default TodoListItem;
