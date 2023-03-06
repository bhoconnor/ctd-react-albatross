// import from react npm package--WHAT DOES THIS MEAN/DO?
import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoListItem.module.css";
// For typechecking props
import PropTypes from "prop-types";

// ************************************************************************************************************************ //
// TO DO LIST COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
// map across to do list array to show each array item after each other in an unordered list
const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    // Used React-specific syntax for style below to align list left
    <ul className={style.ul}>
      {/* "taco" is just parameter used for fun below */}
      {todos.map(function (taco) {
        // Below uses the key of the id for each TodoListItems to cycle through the todoList array

        // ************************************************************************************************************************
        // Instantiation of TodoListItem
        return (
          <TodoListItem
            key={taco.id}
            todoID={taco.id}
            item={taco}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  // Believe this should require an array from todos
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func,
};

// export TodoList function as default module--WHAT DOES THIS MEAN/DO?
export default TodoList;
