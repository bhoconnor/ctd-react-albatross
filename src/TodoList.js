// import from react npm package--WHAT DOES THIS MEAN/DO?
import React from "react";
import TodoListItem from "./TodoListItem";

// array of to do list items
const todoList = [
  {
    id: 1,
    title: "Complete assignment",
  },
  {
    id: 2,
    title: "Learn some React baby",
  },
  {
    id: 3,
    title: "Take a job-well-done nap?",
  },
];

// TO DO LIST COMPONENT / FUNCTION//////////////////////////////////////////////////////
// map across to do list array to show each array item after each other in an unordered list
const TodoList = () => {
  return (
    <ul>
      {/* Taco is parameter below (I think) */}
      {todoList.map(function (taco) {
        // Below uses the key of the id for each TodoListItems to cycle through the todoList array

        // Q: THAT SAID, WHAT DOES item={taco} DO, JUST DEFINE item AS THE JAVASCRIPT taco (SINCE TodoListItem.js USES "item" FOR THE TO DO LIST ITEM TITLE?? AND/OR IS IT FOR SOME REASON PASSING taco AS A PROP, AND IF SO WHY?
        return <TodoListItem key={taco.id} item={taco} />;
      })}
    </ul>
  );
};

// export TodoList function as default module--WHAT DOES THIS MEAN/DO?
export default TodoList;
