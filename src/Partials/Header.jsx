import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "top:40%",
        backgroundSize: "cover",
      }}
      className="w-[90%]  flex flex-col justify-end py-[2%] px-[5%]  mx-auto h-[50vh] "
    >
      <div className="text w-[70%]">
        <h2 className="font-semibold mb-3 text-4xl tracking-wide">
          {data.title || data.name || data.original_title}
        </h2>

        <div className="w-full mt-3 items-center gap-3 flex">
          <h3 className="capitalize"> {data.media_type}</h3>
          <span className="w-2 h-2 bg-emerald-500 rounded-full "></span>
          <h3 className=""> {data.release_date || data.first_air_date}</h3>
          
        </div>
        <p className="mt-3 text-sm">
          {data.overview.slice(0, 200)} ...
          <Link className="text-zinc-zinc-200">more</Link>
        </p>
        <button
          style={{
            background: `linear-gradient(rgba(100,60,10,0.4),rgba(200,60,0,0.5),rgba(250,80,0,0.8))`,
          }}
          className="py-1 mt-3 px-3 text-sm rounded bg-blue-500 text-white"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default Header;
