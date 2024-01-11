import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import SponsorsData from "../Data/HomePageData/SonsorsData";
import Image from "next/image";
function Ourpathners() {
  const FirstHeading = "MEET OUR PARTNERS";
  const SecondHeading = "Our Sponsors";
  const HeadingBody =
    "The amazing people we work with to give you an amazing experience. \
      They have been helping us in achieving all activities ";
  const SecondHeadingStyles = "text-white";
  const HeadingBodyStyle = "text-white";
  const backgroundImage = {
    backgroundImage: "url(./sponsorsBackground.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backgroundImage} className="md:mt-32 mt-10 bg-slate-600">
      <div className="pt-10">
        <HeaderSection
          FirstHeading={FirstHeading}
          SecondHeading={SecondHeading}
          HeadingBody={HeadingBody}
          SecondHeadingStyles={SecondHeadingStyles}
          HeadingBodyStyle={HeadingBodyStyle}
        />
      </div>
      <div className="md:w-8/12 w-10/12 m-auto grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-10 items-center justify-center mt-10 pb-14">
        {SponsorsData.map((e) => {
          return (
            <div key={e.id} className="">
              <Image width={250} height={250} alt="Pathners" src={e.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ourpathners;
