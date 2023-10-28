import React from "react";
import Image from "next/image";
function Hero() {
  const backgroundImageStyle = {
    backgroundImage: "url(/backgroundP.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "840px",
    // Set the height you want
  };
  return (
    <div className=" ">
      <div className="">
        <div
          style={backgroundImageStyle}
          className="md:flex items-center grid grid-cols-1  "
        >
          <div className=" text-center md:text-left md:mt-0 mt-14 md:ml-48 ">
            <div className=" font-bold text-3xl md:text-5xl leading-4 md:leading-7">
              <h1>PHARMACEUTICAL ASSOCIATION </h1>
              <h1>OF NIGERIA STUDENTS</h1>
              <h1> (PANS OAU) </h1>
            </div>
            <div className=" m-5 md:mt-10 text-2xl md:text-4xl font-bold text-fuchsia-950">
              <h1>MOTTO: DEDICATION AND HONESTY</h1>
            </div>
          </div>

          <div className=" md:bottom-0 w-11/12 m-auto md:m-px md:w-fit ">
            <div className=" w-fit">
              <Image width={500} height={500} alt="" src="/president.png" />
              <div className="w-fit relative -mt-20 ">
                <div className="p-3  border bg-white rounded-t-lg">
                  <h1 className=" text-2xl font-bold text-fuchsia-800">
                    Ademola Blessing
                  </h1>
                  <h2 className=" text-md  text-fuchsia-800">
                    PANS OAU President
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
