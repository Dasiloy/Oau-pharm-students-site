import React from "react";
import { Typewriter } from "react-simple-typewriter";
function HeadWritter({ textLines }) {
  return (
    <h1 className="lg:text-2xl text-xl text-orange font-bold">
      <Typewriter
        words={[`${textLines}`]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
}

export default HeadWritter;
