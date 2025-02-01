import React, { useEffect, useState } from "react";
import Sidenav from "../Partials/Sidenav";
import TopNav from "../Partials/TopNav";
// import Header from "../Partials/Header";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";
import Horizontalcard from "../Partials/Horizontalcard";
import Dropdown from "../Partials/Dropdown";
import Loading from "../Partials/Loading";
function Home() {
  document.title = "Movixer | HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const options = ["all", "tv", "movie"];
  const getwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/week`);
      const randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  const gettrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/day`);
      // console.log(data.data.results)
      settrending(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getwallpaper();
    gettrending();
  }, [category]);

  return wallpaper && trending ? (
    <div className="w-full h-full  flex">
      <Sidenav />
      <div className="main w-[80%] overflow-x-hidden overflow-y-auto h-full ">
        <TopNav />
        <Header data={wallpaper} />
        {/* dropdown */}
        <div className="p-5 flex w-full justify-between">
          <h3 className="text-2xl font-semibold tracking-wider uppercase">
            Trending Now
            <span>
              <i className="ri-fire-fill text-transparent shadow-md rounded-full bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400"></i>
            </span>
          </h3>
          <Dropdown
            options={options}
            label="Choose an option"
            func={(selectedOption) => setcategory(selectedOption)}
          />
        </div>
        <Horizontalcard trend={trending} />
      </div>
    </div>
  ) : (
    <Loading/>
  );
}

export default Home;
