import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";
// For more easily assigning multiple styles
import cs from "classnames";
// For typechecking props
import PropTypes from "prop-types";

/* *********************************************************** */
// ADD TO DO FORM COMPONENT / FUNCTION///////////////////////////////////////
/* *********************************************************** */
const AddTodoForm = ({ onAddTodo }) => {
  // New state variable with setter or state updater function called "setTodoTitle" (Note: React Hooks must be called in React function component or a custom React Hook function)
  const [todoTitleValue, setTodoTitle] = useState("");
  // Event listener/handler function to, among other things: 1) listen for event, 2) make new to do item into variable (newTodoTitle)
  const handleTitleChange = (event) => {
    // Retrieve input value from event object & store in newTodoTitle; "target" below is the form, & it's the item the event happens to (believe the form is set as the target b/c that's where this function is called). So within form, below variable gets value of "title" element (<input>).
    const newTodoTitle = event.target.value;
    // Call state setter/updater function from above, setTodoTitle, & pass newTodoTitle variable
    setTodoTitle(newTodoTitle);
  };
  // (event) listener/handler function to, among other things: 1) listen for event (form submission), 2) turn to do item into variable (todoTitle), 3) use props & a callback handler to feed title back to App.js to set the new to do (which happens using state in App.js), & then 4) reset the form.
  const handleAddTodo = (addToDoEvent) => {
    // prevent form from refreshing
    addToDoEvent.preventDefault();
    // Updated `onAddTodo` callback prop to pass Object instead of String w/following properties: 1) 'title`: equal to 'todoTitleValue'; 2) `id`: unique identifier (used `Date.now()` to generate unique number). Also used `Date.now()` as placeholder for unique number generation, but in future should not use (Lesson 1-4)

    // Previously below, invoked `onAddTodo` callback handler prop (which points to the App.js instantiation of this AddTodoForm component) & passed `todoTitle` as argument

    onAddTodo({
      fields: { Title: todoTitleValue },
      id: Date.now(),
    });

    // Reset form after submission
    setTodoTitle("");
  };

  return (
    // Passes handleAddTodo function from above when form is submitted
    <form onSubmit={handleAddTodo}>
      {/* {todoTitleValue}
      {handleTitleChange} */}
      {/* ******************************************************************
      // Instantiation of InputWithLabel (Lesson 1.6)// */}
      <span style={{ width: "93%" }}>
        <InputWithLabel
          todoTitleValue={todoTitleValue}
          handleTitleChange={handleTitleChange}
        >
          I'd like to...
        </InputWithLabel>
      </span>
      <span style={{ width: "7%" }}>
        <button className={cs(style.button, style.buttonLarge)}> x</button>
      </span>
    </form>
  );
};

// PropType for typechecking AddToDoForm props
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
