import React from "react";

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

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>To do list</h1>
        <ul>
          {todoList.map(function (item) {
            return <li key={todoList.id}> {item.title} </li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
