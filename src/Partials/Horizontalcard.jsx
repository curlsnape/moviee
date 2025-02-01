import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Horizontalcard({ trend }) {
  return (
    // <div className="w-full h-[40vh] pt-5 px-5">

      <div className="w-full px-5  flex gap-3 h-[40vh] pb-2 transition-all overflow-x-scroll">
        {trend.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[17.5%] rounded overflow-hidden h-full shrink-0  bg-zinc-800"
            >
              <div className="w-full h-[55%]  overflow-hidden">
                <img
                  className="w-full h-full object-fill"
                  src={`https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.poster_path || item.profile_path
                  }`}
                  alt=""
                />
              </div>
              <div className="text py-1 px-2">
                <span className=" text-sm mb-1">
                  {item.title || item.name || item.original_title}
                </span>
                <p className="text-xs opacity-80">
                  {item.overview.slice(0, 80)}...
                  <Link className="text-zinc-400">More</Link>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    // </div>
  );
}

export default Horizontalcard;
