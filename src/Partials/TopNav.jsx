import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {
  const [query, setquery] = useState("");
  return (
    <div className="w-[80%] flex items-center gap-5 h-[10vh] relative mx-auto">
      <i class="ri-search-line text-lg text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        type="text"
        className="outline-none border border-zinc-600 py-1 px-3 rounded w-[70%]"
        placeholder="Search..."
      />
      {query.length > 0 && (
        <i className="ri-close-line text-2xl text-red-600"></i>
      )}
      <div className="searches w-[70%] rounded ml-[4.5%] overflow-auto absolute bg-white max-h-[50vh] top-[90%]">
        <Link className="text-zinc-600 w-full py-10 flex justify-start px-5 bg-zinc-300">Hello</Link>
      </div>
    </div>
  );
}

export default TopNav;
