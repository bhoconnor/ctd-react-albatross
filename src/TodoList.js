// import from react npm package--WHAT DOES THIS MEAN/DO?
import React from "react";
import TodoListItem from "./TodoListItem";

// ************************************************************************************************************************ //
// TO DO LIST COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
// map across to do list array to show each array item after each other in an unordered list
const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    // Used React-specific syntax for style below to align list left
    <ul style={{ textAlign: "left" }}>
      {/* Taco is parameter below (I think) */}
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

// export TodoList function as default module--WHAT DOES THIS MEAN/DO?
export default TodoList;
