import React from "react";

function SearchTodoContainer() {
  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Search todo..."
        className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white mt-5"
      />
    </form>
  );
}

export default SearchTodoContainer;
