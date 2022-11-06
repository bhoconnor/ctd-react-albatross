import React, { useState } from "react";

// ADD TO DO FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
const AddTodoForm = ({ onAddTodo }) => {
  // new state variable with setter or state updater function called "setTodoTitle" (Note from error i got from browser when the below was not in this component function: "React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks")
  const [todoTitleValue, setTodoTitle] = useState("");
  // event listener/handler function to, among other things: 1) listen for event (submitting form like below maybe?), 2) make new to do item into variable (newTodoTitle),
  const handleTitleChange = (event) => {
    // retrieve the input value from the `event` object and store in variable named `newTodoTitle`; "target" below is the form, & it's the item the event happens to (believe the form is set as the target b/c that's where this function is called). So within the form, the below variable gets the value of the "title" element (<input>).
    const newTodoTitle = event.target.value;
    // call state setter/updater function from above, "setTodoTitle", & pass it "newTodoTitle" variable from right above
    setTodoTitle(newTodoTitle);
  };
  // (event) listener/handler function to, among other things: 1) listen for event (form submission), 2) turn to do item into a variable (todoTitle), 3) use props & a callback handler to feed that title back to App.js to set the new to do (which happens using state in App.js), & then 4) reset the form.
  const handleAddTodo = (addToDoEvent) => {
    // prevent form from refreshing
    addToDoEvent.preventDefault();
    // Instructions from 1-4 for below: "Inside `handleAddTodo`, update the `onAddTodo` callback prop to pass an Object instead of a String; Object should have the following properties:

    // 1) 'title`: equal to `todoTitle (or 'todoTitleValue' in our case)`;
    // 2) `id`: unique identifier (hint: use `Date.now()` to generate a unique number). Disclaimer: we are suggesting `Date.now()` for now as a placeholder for unique number generation, but in the future you should not use this"

    // Previous instruction for below: Invoke the `onAddTodo` callback handler prop (which points to the App.js instantiation of this AddTodoForm component) & pass `todoTitle` as argument
    const onAddTodoObject = { title: todoTitleValue, id: Date.now() };

    onAddTodo(onAddTodoObject);
    // reset the form after submission
    setTodoTitle("");
  };

  return (
    // passes handleAddTodo function from above when form is submitted
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitleValue}
        onChange={handleTitleChange}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
