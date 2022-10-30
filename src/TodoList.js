// import from react npm package--WHAT DOES THIS MEAN/DO?
import React from "react";
import TodoListItem from "./TodoListItem";

// TO DO LIST COMPONENT / FUNCTION//////////////////////////////////////////////////////
// map across to do list array to show each array item after each other in an unordered list
const TodoList = ({ todos }) => {
  return (
    <ul>
      {/* Taco is parameter below (I think) */}
      {todos.map(function (taco) {
        // Below uses the key of the id for each TodoListItems to cycle through the todoList array

        // Q: THAT SAID, WHAT DOES item={taco} DO, JUST DEFINE item AS THE JAVASCRIPT taco (SINCE TodoListItem.js USES "item" FOR THE TO DO LIST ITEM TITLE?? AND/OR IS IT FOR SOME REASON PASSING taco AS A PROP, AND IF SO WHY?
        return <TodoListItem key={taco.id} item={taco} />;
      })}
    </ul>
  );
};

// export TodoList function as default module--WHAT DOES THIS MEAN/DO?
export default TodoList;
