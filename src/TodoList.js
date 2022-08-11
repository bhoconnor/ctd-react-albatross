//import from react npm package--WHAT DOES THIS MEAN/DO?
import React from "react";

//array of to do list items
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

//map across to do list array to show each array item after each other in an unordered list
const TodoList = () => {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={todoList.id}> {item.title} </li>;
      })}
    </ul>
  );
};

//export TodoList function as default module--WHAT DOES THIS MEAN/DO?
export default TodoList;
