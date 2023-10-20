import React from "react";
import Image from "next/image";
function Hero() {
  const backgroundImageStyle = {
    backgroundImage: "url(/backgroundP.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Set the height you want
  };
  const backgroundImageRight = {
    backgroundImage: "url(/backgroundPright.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no repeat",
  };
  /*const presidentBackground={
        backgroundImage:'url(/president.png)',
          backgroundPosition:'center',
        backgroundRepeat:'no repeat',
        back
    }*/
  return (
    <div className=" ">
      <div className="">
        <div
          style={backgroundImageStyle}
          className="md:flex items-center grid grid-cols-1  "
        >
          <div className=" ml-10 md:ml-48 ">
            <div className=" font-extrabold text-3xl md:text-5xl leading-4 md:leading-7">
              <h1>PHARMACEUTICAL ASSOCIATION </h1>
              <h1>OF NIGERIA STUDENTS</h1>
              <h1> (PANS OAU) </h1>
            </div>
            <div className=" mt-10 text-3xl font-extrabold text-fuchsia-950">
              <h1>MOTTO: DEDICATION AND HONESTY</h1>
            </div>
          </div>

          <div className=" md:bottom-0 w-11/12 m-auto md:m-px md:w-fit ">
            <div className=" w-fit">
              <Image width={500} height={500} alt="" src="/president.png" />
              <div className="absolute bottom-0 left-7">
                <div className="p-3 border border-black bg-white rounded-t-lg">
                  <h1>Ademola Blessing</h1>
                  <h2>PANS OAU President</h2>
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
