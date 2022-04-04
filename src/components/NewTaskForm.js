import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const newCategories = categories.filter(cat => cat !== "All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
    setCategory("Code");
  }



  return (
    <form className="new-task-form" onSubmit={handleSubmit}  >
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)} >
          {newCategories.map(cat =>
            <option key={cat} >{cat}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
