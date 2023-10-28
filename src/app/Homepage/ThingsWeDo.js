import React from "react";
import Image from "next/image";
function ThingsWeDo() {
  return (
    <div className="mt-28 w-11/12 md:w-9/12 m-auto">
      <div className=" text-center">
        <div>
          <h1 className=" text-2xl font-bold text-orange">Things We Do</h1>
          <h1 className=" text-4xl md:text-5xl font-bold mt-3">
            Our Activities
          </h1>
        </div>
        <div className="md:mt-10 mt-7 text-lg md:text-xl leading-3 md:leading-4">
          <p>
            PANS OAU makes an effort to ensure that her members are not only
            bookworms, but also have a good time. So, at PANS OAU, we organize a
            variety of social events such as hangouts, movie nights, parties,
            and other programs aimed at fostering social relationships.
          </p>
        </div>
      </div>
      <div className="md:flex hidden justify-center mt-10 ">
        <Image src="/ThingsWeDo.svg" alt="pict" width={1240} height={628} />
      </div>
      <div className="flex md:hidden justify-center mt-5 ">
        <Image src="/ACTIVITES.svg" alt="pict" width={375} height={907} />
      </div>
    </div>
  );
}

export default ThingsWeDo;
