import React from "react";

function Card() {
  return (
    <div className="bg-green-500 p-3 w-72 grid grid-rows-3  md:grid-rows-2">
      <div className="md:col-span-2 bg-black md:row-span-1 h-10">hello</div>
      <div className="md:col-span-1 md:row-span-1 bg-slate-500 p-2">this </div>
      <div className="bg-orange-300">is  JS</div>
    </div>
  );
}

export default Card;
