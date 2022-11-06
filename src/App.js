// {useState} below allows to avoid typing "React.useState" when creating a variable
import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// Previous array of to do list items (used to be in TodoList.js), commented out partially at first, then at GitHub commenter's request (11/4/22) i commented it all out.
// const todos = [
//   // {
//   //   id: 1,
//   //   title: "Complete assignment",
//   // },
//   // {
//   //   id: 2,
//   //   title: "Learn some React baby",
//   // },
//   // {
//   //   id: 3,
//   //   title: "Take a job-well-done nap?",
//   // },
// ];

// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
function App() {
  // REMOVED BELOW newTodo STATE VARIABLE FOR LESSON 1-4:
  // Below sets new to do's. Creates a new state variable named `newTodo` with update function named `setNewTodo` (with useState hook)
  // const [newTodo, setNewTodo] = useState("");

  // Below stores ALL to do's. Creates new state variable called "todoList" w/"setter" called "setTodoList" w/an empty array as default value (was "todos" prior to that, but then had recommended to change to empty array). This was "lifting state" step.
  const [todoList, setTodoList] = useState([]);

  // Instruction from 1-4: "Declare a new function named `addTodo` that takes `newTodo` as a parameter. Call the `setTodoList` state setter and use the spread operator to pass the existing Objects in the `todoList` Array along with the `newTodo` Object."
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>To do list</h1>
        {/* Instructions from 1-4: "Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`" */}
        <AddTodoForm onAddTodo={addTodo} />
        {/* paragraph element that displays value of `newTodo` variable, removed for lesson 1-4 */}
        {/* <p>{newTodo}</p> */}
        <TodoList todos={todoList} />
      </header>
    </div>
  );
}

export default App;
