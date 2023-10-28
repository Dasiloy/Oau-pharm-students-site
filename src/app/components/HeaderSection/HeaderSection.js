import React from "react";

function HeaderSection({
  FirstHeading,
  SecondHeading,
  HeadingBody,
  SecondHeadingStyles,
  HeadingBodyStyle,
}) {
  return (
    <div className="md:w-9/12 w-11/12 m-auto text-center">
      <div>
        <h1 className="md:text-2xl text-2xl text-orange font-bold">
          {FirstHeading}
        </h1>
        <h1
          className={`md:text-5xl text-4xl ${SecondHeadingStyles} font-bold mt-3`}
        >
          {SecondHeading}
        </h1>
      </div>
      <div>
        <p className={`md:text-xl text-lg ${HeadingBodyStyle} mt-5`}>
          {HeadingBody}
        </p>
      </div>
    </div>
  );
}

export default HeaderSection;
