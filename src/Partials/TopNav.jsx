import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../public/noimage.jpeg";
function TopNav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState(null);
  const getsearches = async () => {
    try {
      const data = await axios.get(`/search/multi?query=${query}`);
      console.log(data.data.results);
      setsearch(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <div className="w-[80%] flex items-center gap-5 h-[10vh] relative mx-auto">
      <i class="ri-search-line text-lg text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        type="text"
        value={query}
        className="outline-none border  shadow-zinc-500 border-zinc-600 py-1 px-3 rounded w-[70%]"
        placeholder="Search..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-line transition-all text-2xl text-red-600"
        ></i>
      )}

      <div className="searches w-[70%] rounded ml-[4.4%] overflow-auto absolute bg-white max-h-[50vh] top-[80%]">
        {search &&
          search.map((item, i) => {
            return (
              <Link
                key={i}
                className="text-zinc-600 hover:text-black gap-5 items-center hover:bg-zinc-200 border-b-[1px] w-full py-10 flex justify-start px-5 bg-zinc-300 "
              >
                <img
                  className="w-48 hover:scale-110 transition-all h-40 object-contain rounded-xl"
                  src={
                    item.backdrop_path || item.poster_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path ||
                          item.poster_path ||
                          item.profile_path
                        }`
                      : noimage
                  }
                />
                <span className="font-semibold tracking-wide">
                  {item.title || item.original_title || item.name}
                </span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default TopNav;
