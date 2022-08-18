import "./App.css";

import React from "react";

import Header from "./Components/Header/Header";
import TasksList from "./Components/Tasks/TasksList";

function App() {
  return (
    <div className="App">
      <Header />
      <TasksList />
    </div>
  );
}

export default App;
