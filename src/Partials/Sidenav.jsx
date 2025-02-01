// import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav w-[20%] h-full border-r-[1px] py-10 px-5 border-zinc-600">
      <div className="logo_part text-2xl">
        <i className="ri-tv-fill text-[#409AF3]"></i>
        <span className="ml-3 font-extrabold uppercase  tracking-wider text-white">
          Movixer.
        </span>
      </div>
      <nav className="w-full  text-zinc-300 flex gap font-[gilroy] flex-col">
        <h4 className="mt-10 mb-2 font-black text-white font-[gilroy] tracking-wider">
          Explore the latest...
        </h4>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-fire-fill text-transparent shadow-md rounded-full bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400"></i>
          <span className="ml-2 ">Trending</span>
        </Link>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-sparkling-fill text-yellow-300 shadow-md"></i>
          <span className="ml-2 ">Popular</span>
        </Link>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-clapperboard-fill text-blue-800 "></i>
          <span className="ml-2 ">Movies</span>
        </Link>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-tv-2-fill text-white shadow-md"></i>
          <span className="ml-2 ">Tv Series</span>
        </Link>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-team-fill text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500  shadow-md"></i>
          <span className="ml-2 ">People</span>
        </Link>
      </nav>
      <hr className="border-none h-[1px] mt-5 bg-zinc-600" />
      <nav className="w-full  text-zinc-300 flex gap font-[gilroy] flex-col">
        <h4 className="mt-10 mb-2 font-black text-white font-[gilroy] tracking-wider">
          Website Info...
        </h4>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r  from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <span className="">
            <i className="ri-information-fill text-blue-100 mr-2"></i>
            About
          </span>
        </Link>
        <Link
          className="py-3 px-1 hover:px-5 tracking-wider duration-300 rounded font-semibold transition-all hover:text-white bg-transparent hover:bg-gradient-to-r from-[#1E90FF] to-[#6050DC]"
          to=""
        >
          <i className="ri-phone-fill text-blue-700 mr-2"></i>
          <span className=" ">Contact </span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
