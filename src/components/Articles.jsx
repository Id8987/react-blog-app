import React from "react";
import Card from "./Card";

function Articles() {
  return (
    <div className="mt-10 p-8 bg-white flex flex-col gap-2 items-center md:flex-row md:justify-around md:flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Articles;
