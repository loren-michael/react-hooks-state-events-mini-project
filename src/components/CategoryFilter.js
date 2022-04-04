import React from "react";

function CategoryFilter({ categories, onSelCat }) {

  // function handleCategory(event) {
  //   setSelCat(event.target.value)
  // }


  // function handleCategory(event) {
  //   if (event.target.className === "") {
  //     event.target.className = "selected";
  //   } else if (event.target.className === "selected") {
  //     event.target.className = "";
  //   }
  // };


  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((cat) =>
          <button value={cat} key={cat} className="" onClick={onSelCat} >{cat}</button>
        )}
    </div>
  );
}

export default CategoryFilter;
