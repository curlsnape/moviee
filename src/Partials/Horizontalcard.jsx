import React from "react";

function Horizontalcard({ trend }) {
  return (
    <div className="w-full h-[40vh] pt-5 px-5">
      <h3 className="text-2xl px-8 pb-5  w-full font-semibold tracking-wider uppercase">
        Trending Now
      </h3>
      <div className="w-full flex gap-3 h-[40vh] ">
      
          {trend.map((item, i) => { 
         return  <div className="w-[20.5%] h-full bg-white">
            <span className="text-black">{item.title}</span>
           </div>
          })}
    
      </div>
    </div>
  );
}

export default Horizontalcard;
