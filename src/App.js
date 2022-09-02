import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// APP COMPONENT / FUNCTION//////////////////////////////////////////////////////
function App() {
  // create a new state variable named `newTodo` with update function named `setNewTodo` (with useState hook)
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>To do list</h1>
        {/* pass `setNewTodo` as a callback handler prop named `onAddTodo` to `AddTodoForm` component */}
        <AddTodoForm onAddTodo={setNewTodo} />
        {/* paragraph element that displays value of `newTodo` variable */}
        <p>{newTodo}</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
