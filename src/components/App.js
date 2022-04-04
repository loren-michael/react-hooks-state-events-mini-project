import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selCat, setSelCat] = useState("All");

  function handleDeleteButton(event) {
    event.target.parentNode.remove()
  };

  function handleSelCat(event) {
    // console.log(event.target.value)  // gives me the category of the button selected
    if (event.target.className === "") {
          event.target.className = "selected";
          setSelCat(event.target.value);
        } else if (event.target.className === "selected") {
          event.target.className = "";
          setSelCat("All")
        };
    
  }

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask])
  };
// console.log(selCat)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        tasks={tasks} 
        categories={CATEGORIES} 
        selCat={selCat} 
        onSelCat={handleSelCat}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleNewTask}
      />
      <TaskList tasks={tasks} handleDeleteButton={handleDeleteButton} selCat={selCat} />
    </div>
  );
}

export default App;
