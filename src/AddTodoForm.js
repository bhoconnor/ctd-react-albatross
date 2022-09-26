import React from "react";

// ADD TO DO FORM COMPONENT / FUNCTION//////////////////////////////////////////////////////
const AddTodoForm = (props) => {
  // (event) listener/handler function to, among other things: 1) listen for event (form submission), 2) turn to do item into a variable (todoTitle), 3) use props & a callback handler to feed that title back to App.js to set the new to do (which happens using state in App.js), & then 4) reset the form.
  const handleAddTodo = (event) => {
    // prevent form from refreshing
    event.preventDefault();
    // "target" below is the form, & it's the item the event happens to (believe the form is set as the target b/c that's where this function is called). So within the form, the below variable gets the value of the "title" element (<input>).
    const todoTitle = event.target.title.value;
    // invoke the `onAddTodo` callback handler prop (which points to the App.js instantiation of this AddTodoForm component) & pass `todoTitle` as argument
    props.onAddTodo(todoTitle);
    // reset the form after submission
    event.target.reset();
    console.log(todoTitle);
  };

  return (
    // passes handleAddTodo function from above when form is submitted
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" name="title"></input>
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
