import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Partials/TopNav";
import Dropdown from "../Partials/Dropdown";
import axios from "../Utils/Axios";
import Cards from "../Partials/Cards";
import Loading from "../Partials/Loading";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState(null);
  const options = ["all", "tv", "movie"];
  const options2 = ["day", "week"];
  const gettrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
  gettrending()
  },[category,duration])
  return (trending?
    <div className="w-full h-screen overflow-y-auto  px-8">
      <nav className="w-full h-[15vh] flex items-center justify-between">
        <div className="left flex items-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-long-line text-lg mr-2 hover:text-[#409AF3]"
          ></i>
          <h4 className="font-semibold tracking-wide">Trending</h4>
        </div>
        <div className="center flex w-[75%] items-center">
          <TopNav />
          <Dropdown
            options={options}
            label="Category"
            funct={(selectedOption) => setcategory(selectedOption)}
          />
          <div className="mr-2"></div>
          <Dropdown
            options={options2}
            label="Choose an option"
            funct={(selectedOption) => setcategory(selectedOption)}
          />
        </div>
      </nav>
      <Cards data={trending}/>
    </div>:<Loading/>
  );
}

export default Trending;
