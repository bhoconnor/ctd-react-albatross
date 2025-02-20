import React from "react";
import style from "./TodoListItem.module.css";
// For more easily assigning multiple styles
import cs from "classnames";
// For typechecking props
import PropTypes from "prop-types";

/* *********************************************************** */
//TO DO LIST ITEM FORM COMPONENT / FUNCTION/////////////////////////////////
/* *********************************************************** */
const TodoListItem = ({ item, onRemoveTodo, todoID }) => {
  return (
    <li key={todoID} className={style.listItem}>
      {/* Changed below from {item.title} to item.fields.Title in 1-8 */}
      <span style={{ width: "93%" }}>{item.fields.Title}</span>
      <span style={{ width: "7%" }}>
        <button
          type="button"
          onClick={() => onRemoveTodo(todoID)}
          className={cs(style.button, style.buttonSmall)}
        >
          x
        </button>
      </span>
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func,
  todoID: PropTypes.string.isRequired,
};

export default TodoListItem;
