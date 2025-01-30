import React, { useEffect, useState } from "react";
import Sidenav from "../Partials/Sidenav";
import TopNav from "../Partials/TopNav";
// import Header from "../Partials/Header";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";
import Horizontalcard from "../Partials/Horizontalcard";

function Home() {
  document.title = "Movixer | HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
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
      const data  = await axios.get(`/trending/all/week`);
      // console.log(data.data.results)
      settrending(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(trending)
  useEffect(() => {
    !wallpaper && getwallpaper();
    !trending && gettrending();
    
  }, []);

  return (wallpaper&& trending?
    <div className="w-full h-full  flex">
      <Sidenav />
      <div className="main w-[80%] overflow-x-hidden overflow-y-auto h-full ">
        <TopNav />
        <Header data={wallpaper} />
        <Horizontalcard trend={trending}/>
      </div>
    </div>:<h1>loading...</h1>
  );
}

export default Home;
