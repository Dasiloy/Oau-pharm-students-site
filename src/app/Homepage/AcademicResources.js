import React from "react";
import Button from "../components/button/button";
function AcademicResources() {
  const text = "View more";
  const displayProperties = "bg-white text-fuchsia-900";
  return (
    <div className=" bg-slate-800 mt-20 md:mt-32">
      <div className="md:flex justify-between items-center w-11/12 md:w-9/12 m-auto p-5 pt-10 pb-10">
        <div className=" text-white text-center md:text-left">
          <h1 className="md:text-4xl text-3xl  font-bold">
            ACADEMIC RESOURCES
          </h1>
          <h1 className="md:text-xl text-lg font-semibold mt-3">
            Check your Lecture & Practical Timetable, Academic Calendar and
            Lecture materials.
          </h1>
        </div>
        <div className="flex justify-center md:mt-0 mt-5">
          <Button text={text} displayProperties={displayProperties} />
        </div>
      </div>
    </div>
  );
}
export default AcademicResources;
