// {useState} below allows to avoid typing "React.useState" when creating a variable
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ************************************************************************************************************************ //
// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //
function App() {
  // ************************************************************************************************************************ //
  // STATE: Various situations dealing with State below

  // Below stores ALL to do's. Creates new state variable called "todoList" w/"setter" called "setTodoList" w/an empty array as default value (was "todos" prior to that, but then had recommended to change to empty array). This was previously a part of "lifting state" step.
  const [todoList, setTodoList] = useState([]);

  // For dealing w/State when data is loading
  const [isLoading, setIsLoading] = useState(true);

  // ************************************************************************************************************************ //
  // FETCH-RELATED

  // 1st useEffect hook, to mimic async data fetching & to take saved todoList items (in stringified format), parse them into JS objects, & add those objects as an array to the setTodolist state updater function (1-7). Updated in 1-8 to fetch Airtable API & have Bearer token authentication, taking promise & returning JSON data.
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((result) => {
        setTodoList([...result.records]);
        setIsLoading(false);
      });
  }, []);

  // 2nd useEffect hook, defined with todoList as a dependency; inside the side-effect handler function, saved todoList inside localStorage with the key "savedTodoList" (Lesson 1-5); changed so only sets localStorage if isLoading is false (1-7); replaced "savedTodoList" with "todoList" after changed to actual API.
  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  // "Declare new function named `addTodo` that takes `newTodo` as parameter. Call `setTodoList` state setter & use spread operator to pass existing Objects in `todoList` Array along with `newTodo` Object." (Lesson 1-4)
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // ************************************************************************************************************************ //
  // REMOVE FUNCTION

  // Handler function to remove a to do list item ("todoItem") with a given ID from the to do list list if "Remove" button is clicked for that ID (using button in TodoListItem.js)
  const removeTodo = (id) => {
    const newArray = todoList.filter((todoItem) => id !== todoItem.id);

    setTodoList(newArray);
    console.log("newArray: ", newArray);
  };

  // Added BrowserRouter component, Routes component, & 2 Route components (Lesson 1-9)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <header style={{ textAlign: "center" }}>
                <h1>To do list</h1>
                {/* ************************************************************************************************************************ */}
                {/* Instantiation of AddTodoForm */}
                {/* "Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`" (Lesson 1-4) */}
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (
                  <p style={{ textAlign: "left" }}>Loading...</p>
                ) : (
                  // ************************************************************************************************************************
                  // Instantiation of TodoList
                  <TodoList todos={todoList} onRemoveTodo={removeTodo} />
                )}
              </header>
            </>
          }
        />
        <Route path="/new" exact element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
