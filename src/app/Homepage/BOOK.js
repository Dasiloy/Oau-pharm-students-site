import React from "react";
import Books from "../Data/HomePageData/Books";
import Image from "next/image";
function BOOK() {
  return (
    <div className="grid grid-cols-2  w-11/12 gap-5 md:w-full m-auto  md:grid-cols-4 items-center mt-20 md:mt-32 md:overflow-hidden">
      {Books.map((e) => {
        return (
          <div key={e.id} className="md:flex justify-center ">
            <Image width={350} height={200} alt="BOOKS" src={e.image} />
          </div>
        );
      })}
    </div>
  );
}

export default BOOK;
