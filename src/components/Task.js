import React from "react";

function Task({ name, category, handleDeleteButton }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={handleDeleteButton} >X</button>
    </div>
  );
}

export default Task;
