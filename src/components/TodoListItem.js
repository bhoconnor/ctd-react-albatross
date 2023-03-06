import React from "react";
import style from "./TodoListItem.module.css";
// For more easily assigning multiple styles
import cs from "classnames";
// For typechecking props
import PropTypes from "prop-types";

// ************************************************************************************************************************ //
//TO DO LIST ITEM FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
const TodoListItem = ({ item, onRemoveTodo, todoID }) => {
  console.log("item:", item, "item type:", typeof item);
  return (
    <li key={todoID} className={style.listItem}>
      {/* Changed below from {item.title} to item.fields.Title in 1-8 */}
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

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func,
  todoID: PropTypes.string.isRequired,
};

export default TodoListItem;
