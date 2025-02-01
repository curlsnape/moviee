import React from "react";

function Cards({ data }) {
    console.log(data)
  return (
    <div className="w-full h-screen flex gap-6 flex-wrap">
      {data.map((item, index) => {
        return (
            <div className="flex flex-col pb-10">
          <div className="w-[30vh] h-[40vh] bg-white">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${
                          item.backdrop_path ||
                          item.poster_path ||
                          item.profile_path
                        }`} alt="" />
          
          </div>
            <h4 className="text-sm mt-3 tracking-wide font-semibold">
            {item.title || item.name || item.original_title}
          </h4>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
