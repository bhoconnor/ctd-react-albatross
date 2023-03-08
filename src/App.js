// {useState} below allows to avoid typing "React.useState" when creating a variable
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
// Navigation / Router support
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS Modules stylesheet
import style from "./components/TodoListItem.module.css";
// DECIDED NOT TO USE FOR NOW: CSS Styled Components
// import styled from "styled-components";

// DECIDED NOT TO USE FOR NOW: Variables for CSS Styled Components
// const Heading1 = styled.h1`
//   font-size: 5em;
//   font-family: fantasy, serif;
//   color: black;
//   margin-bottom: 0.0001em;
// `;

/* *********************************************************** */
// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
/* *********************************************************** */
function App() {
  /* *********************************************************** */
  // STATE: Various situations dealing with State below

  // Below stores ALL to do's. Creates new state variable called "todoList" w/setter of "setTodoList", w/an empty array as default value (was "todos" prior to that, but then had recommendation to change to empty array). This was previously a part of "lifting state" step.
  const [todoList, setTodoList] = useState([]);

  // For dealing w/State when data is loading
  const [isLoading, setIsLoading] = useState(true);

  /* *********************************************************** */
  // FETCH-RELATED

  // 1st useEffect hook, to mimic async data fetching & to take saved todoList items (in stringified format), parse them into JS objects, & add those objects as an array to the setTodolist state updater function (1-7). Updated in 1-8 to fetch Airtable API & have Bearer token authentication, taking promise & returning JSON data.

  useEffect(() => {
    fetch(
      // Sorts according to order in Airtable (can add &sort[0][field]=Title&sort[0][direction]=asc to fetch url to sort by alpha ascending, or just un-comment JS code below)
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((result) => {
        // // Sort in descending order
        // result.records.sort(function (objectA, objectB) {
        //   if (objectA.fields.Title < objectB.fields.Title) {
        //     return -1;
        //   } else if (objectA.fields.Title > objectB.fields.Title) {
        //     return 1;
        //   } else {
        //     return 0;
        //   }
        // });
        setTodoList([...(result.records || [])]);
        setIsLoading(false);
      });
  }, []);

  /*
INPUT: Function that takes 2 parameters
OUTPUT: Returns -1 if Title A < B, 0 if A = B, 1 if A > B
NOTES: 
*/

  // console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

  // 2nd useEffect hook, defined with todoList as a dependency; inside the side-effect handler function, saved todoList inside localStorage with the key "savedTodoList" (Lesson 1-5); changed so only sets localStorage if isLoading is false (1-7); replaced "savedTodoList" with "todoList" after changed to actual API.
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // "Declare new function named `addTodo` that takes `newTodo` as parameter. Call `setTodoList` state setter & use spread operator to pass existing Objects in `todoList` Array along with `newTodo` Object." (Lesson 1-4)
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  /* *********************************************************** */
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
            <div className={style.container}>
              <header style={{ textAlign: "center" }}>
                <h1 className={style.h1}>B's to do list</h1>
                {/* ****************************************************** */}
                {/* Instantiation of AddTodoForm */}
                {/* "Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`" (Lesson 1-4) */}
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (
                  <p style={{ textAlign: "left" }}>Loading...</p>
                ) : (
                  // ******************************************************
                  // Instantiation of TodoList
                  <TodoList todos={todoList} onRemoveTodo={removeTodo} />
                )}
              </header>
            </div>
          }
        />
        <Route path="/new" exact element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
