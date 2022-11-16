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

// savedTodoListToParse is to feed into JSON.parse as the default todoList useState value.
const savedTodoListToParse = localStorage.getItem("savedTodoList");

// Instructions from 1-5: "Above the `App` functional component, create a new function named `useSemiPersistentState` which will be a custom hook"
const useSemiPersistentState = () => {
  // REMOVED BELOW newTodo STATE VARIABLE FOR LESSON 1-4:
  // Below sets new to do's. Creates a new state variable named `newTodo` with update function named `setNewTodo` (with useState hook)
  // const [newTodo, setNewTodo] = useState("");

  // Below stores ALL to do's. Creates new state variable called "todoList" w/"setter" called "setTodoList" w/an empty array as default value (was "todos" prior to that, but then had recommended to change to empty array). This was "lifting state" step.
  const [todoList, setTodoList] = useState(
    // Instructions: "Update the default state for `todoList` to read your `"savedTodoList"` item from `localStorage`. Then update your default state to parse the value of the `"savedTodoList"` item.
    JSON.parse(savedTodoListToParse)
  );

  // Instructions from 1-5: "Define a `useEffect` React hook with `todoList` as a dependency; inside the side-effect handler function, save the `todoList` inside `localStorage` with the key `"savedTodoList"` "
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  // Instructions from 1-5: "Add a `return` statement in `useSemiPersistentState` that returns the `todoList` state variable and setter in an Array (just like how it's returned from the `useState` hook)"
  return [todoList, setTodoList];
};

// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
function App() {
  // Instruction from 1-5: "Update `App` to use the new custom hook. Hint: Copy the `useState` hook from before, but change `useState` to the custom hook `useSemiPersistentState` (no arguments)"
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  // Instruction from 1-4: "Declare a new function named `addTodo` that takes `newTodo` as a parameter. Call the `setTodoList` state setter and use the spread operator to pass the existing Objects in the `todoList` Array along with the `newTodo` Object."
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    // Made below into React fragments, changing <div> </div> tags to just <> </>
    <>
      <header style={{ textAlign: "center" }}>
        <h1>To do list</h1>
        {/* Instructions from 1-4: "Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`" */}
        <AddTodoForm onAddTodo={addTodo} />
        {/* paragraph element that displays value of `newTodo` variable, removed for lesson 1-4 */}
        {/* <p>{newTodo}</p> */}
        <TodoList todos={todoList} />
      </header>
    </>
  );
}

export default App;
