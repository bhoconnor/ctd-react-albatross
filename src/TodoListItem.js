import React from "react";

// ************************************************************************************************************************ //
//TO DO LIST ITEM FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
const TodoListItem = ({ item, onRemoveTodo, todoID }) => {
  // console.log("onRemoveTodo: ", onRemoveTodo);
  return (
    <li key={todoID}>
      {item.title}
      <button type="button" onClick={() => onRemoveTodo(todoID)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
