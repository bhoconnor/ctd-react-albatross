// {useState} below allows to avoid typing "React.useState" when creating a variable
import React, { useEffect, useState } from "react";
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

// ************************************************************************************************************************ //
// CUSTOM HOOK (useSemiPersistentState) ///////////////////////////////////////////////////////////////
// ************************************************************************************************************************ //

// savedTodoListToParse was to feed into JSON.parse as the default todoList useState value, changed in 1-7 to feed into mimicking of async data fetching via useEffect hook in App component.
const savedTodoListToParse = localStorage.getItem("savedTodoList");

// // New function named `useSemiPersistentState`, a custom hook. (Lesson 1-5)
// const useSemiPersistentState = () => {
//   // REMOVED BELOW newTodo STATE VARIABLE FOR LESSON 1-4 & MOVED useState & useEffect FUNCTIONS INTO APP COMPONENT FOR 1-7

//   // Below sets new to do's. Creates a new state variable named `newTodo` with update function named `setNewTodo` (with useState hook)

//   // const [newTodo, setNewTodo] = useState("");

//   // Returns todoList state variable & state setter in an array (like how it's returned from a useState hook, Lesson 1-5)
//   return [todoList, setTodoList];
// };

// ************************************************************************************************************************ //
// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
function App() {
  //  Commented out useSemiPersistentState b/c moved to async data. Previously had updated App to use it. Copied useState hook from before, but changde useState to useSemiPersistentState w/out any arguments. (Lesson 1-5)
  // const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  // ************************************************************************************************************************ //
  // STATE: Various situations dealing with State below

  // Below stores ALL to do's. Creates new state variable called "todoList" w/"setter" called "setTodoList" w/an empty array as default value (was "todos" prior to that, but then had recommended to change to empty array). This was previously a part of "lifting state" step.
  const [todoList, setTodoList] = useState(
    // Updated  default state for todoList to read "savedTodoList" item from localStorage. Then updated default state to parse  value of the "savedTodoList" item. Also had to add or statement || followed by empty bracket, so when local storage is cleared & therefore empty, it still works.
    []
  );

  // For dealing w/State when data is loading
  const [isLoading, setIsLoading] = useState(true);

  // // 1st useEffect hook, to mimic async data fetching & to take saved todoList items (in stringified format), parse them into JS objects, & add those objects as an array to the setTodolist state updater function (1-7).
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(savedTodoListToParse) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    });
  }, []);

  // 2nd useEffect hook, defined with todoList as a dependency; inside the side-effect handler function, saved todoList inside localStorage with the key "savedTodoList" (Lesson 1-5); changed so only sets localStorage if isLoading is false (1-7).
  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  // "Declare new function named `addTodo` that takes `newTodo` as parameter. Call `setTodoList` state setter & use spread operator to pass existing Objects in `todoList` Array along with `newTodo` Object." (Lesson 1-4)
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // RE: BELOW: Try to see if removeTodo function below works withOUT parts of comment in brackets--if so, remove those parts in brackets.

  // Handler function to remove a to do list item ("todoItem") with a given ID from the to do list list if "Remove" button is clicked for that ID (using button in TodoListItem.js)
  const removeTodo = (id) => {
    const newArray = todoList.filter((todoItem) => id !== todoItem.id);

    setTodoList(newArray);
    console.log("newArray: ", newArray);
  };

  return (
    // Made below into React fragments, changing <div> </div> tags to just <> </>
    <>
      <header style={{ textAlign: "center" }}>
        <h1>To do list</h1>
        {/* ************************************************************************************************************************ */}
        {/* Instantiation of AddTodoForm */}
        {/* "Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`" (Lesson 1-4) */}
        <AddTodoForm onAddTodo={addTodo} />
        {/* Paragraph to display value of `newTodo` variable (Lesson 1-4) */}
        {/* <p>{newTodo}</p> */}
        {isLoading ? (
          <p style={{ textAlign: "left" }}>Loading...</p>
        ) : (
          // ************************************************************************************************************************
          // Instantiation of TodoList
          <TodoList todos={todoList} onRemoveTodo={removeTodo} />
        )}
      </header>
    </>
  );
}

export default App;
