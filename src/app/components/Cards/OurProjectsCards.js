import React from "react";
import OurProject from "../../Data/HomePageData/OurProjectData";
import Image from "next/image";

function OurProjectsCardSlip({ image, headings, body }) {
  return (
    <div className=" md:w-96 w-80 m-auto bg-white rounded-xl shadow-sm shadow-slate-300">
      <div className=" w-11/12 m-auto  pt-5">
        <div className="flex justify-center">
          <Image height={250} width={300} src={image} alt="" />
        </div>

        <div className=" text-center w-11/12 m-auto">
          <h1 className="text-xl mt-5 text-fuchsia-900 font-bold">
            {headings}
          </h1>
          <p className="mt-3 ">{body}</p>
        </div>
        <div className="flex justify-center pb-5">
          <h1>Read more</h1>
        </div>
      </div>
    </div>
  );
}

export default OurProjectsCardSlip;
