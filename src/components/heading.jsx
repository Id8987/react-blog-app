import React from "react";

function Heading() {
  return (
    <nav className="grid grid-cols-3 p-6 bg-white shadow-md">
      <div className="col-span-2 flex items-center justify-start">
        <div className="bg-red-500 p-3 mr-3 rounded-lg cursor-pointer">logos</div>
        <div className="flex items-center">
          <div className="bg-blue-500 p-1 mr-1 rounded-2xl text-white font-bold cursor-pointer">+</div>
          <p className="text-3xl font-tiatie font-bold">Hashnode</p>
        </div>
      </div>
      <ul className="hidden md:flex md:justify-around ">
        <li className="list-style bg-blue-800 text-white">write</li>
        <li className="list-style">liens </li>
        <li className="list-style">mode</li>
        <li className="list-style">notifs</li>
        <li className="list-style">compte</li>
      </ul>
    </nav>
  );
}

export default Heading;
