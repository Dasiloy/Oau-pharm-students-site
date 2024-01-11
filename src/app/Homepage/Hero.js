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
    <div className="relative -z-10">
      <div className="grid  lg:grid-cols-10">
        <div className=" bg-[url('/backgroundP.png')] bg-cover bg-center h-[500px] lg:h-[840px] bg-fuchsia-400 col-span-7 grid ">
          <div className="lg:w-10/12 text-center md:text-left w-11/12  m-auto items-center z-50 ">
            <div className=" font-bold text-3xl md:text-5xl leading-4 md:leading-7">
              <h1>PHARMACEUTICAL ASSOCIATION </h1>
              <h1>OF NIGERIA STUDENTS</h1>
              <h1> (PANS OAU) </h1>
            </div>
            <div className=" m-5 md:mt-10 text-2xl md:text-4xl font-bold text-fuchsia-950">
              <h1>MOTTO: DEDICATION AND HONESTY</h1>
            </div>
          </div>
        </div>
        <div className="bg-[url('/backgroundPright.png')] lg:grid hidden bg-cover bg-center h-[840px] bg-fuchsia-800 col-span-3"></div>
      </div>
      <div className="absolute bottom-0 xl:grid hidden lg:hidden  xl:right-[250px]  2xl:right-[400px]">
        <div className="">
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
      <div className='md:hidden  bg-[url("/backgroundPright.png")] bg-cover bg-center  bg-fuchsia-200 '>
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
  );
}

export default Hero;
