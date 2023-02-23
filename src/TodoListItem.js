import React from "react";

// ************************************************************************************************************************ //
//TO DO LIST ITEM FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
const TodoListItem = ({ item, onRemoveTodo, todoID }) => {
  return (
    <li key={todoID}>
      {/* Changed below from {item.title} to item.fields.Title in 1-8*/}
      {item.fields.Title}
      <button type="button" onClick={() => onRemoveTodo(todoID)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
