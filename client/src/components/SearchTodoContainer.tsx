import React from "react";
import { useAtom } from "jotai";
import { jotaiSearchValue } from "../atoms/JotaiAtoms";

function SearchTodoContainer() {
  const [search, setSearch] = useAtom(jotaiSearchValue);

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Search todo..."
        className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white"
        onChange={(e) => searchOnChange(e)}
        value={search}
      />
    </form>
  );
}

export default SearchTodoContainer;
