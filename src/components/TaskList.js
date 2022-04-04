import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDeleteButton, selCat }) {
const filterTasks = tasks.filter((task) => {
  if (selCat === "All") {
    return true
  }
  return selCat === task.category
})

  return (
    <div className="tasks">
      {filterTasks.map(task => (
        <Task handleDeleteButton={handleDeleteButton} key={task.text} name={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
