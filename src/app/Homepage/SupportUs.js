import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
function SupportUs() {
  const FirstHeading = "WE NEED YOU";
  const SecondHeading = "Support Us";
  const HeadingBody =
    "PANS OAU is a non profit organization that needs the help of others to strive.\
       So, at PANS OAU, we organize a variety of social events such as hangouts, movie nights, \
       parties, and other programs aimed at fostering social relationships.";
  const SecondHeadingStyles = "text-white";
  const HeadingBodyStyle = "text-white";
  const backgroundImage = {
    backgroundImage: "url(./supportUs.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="md:mt-32 mt-20">
      <div style={backgroundImage} className="w-11/12 m-auto pt-10 pb-10">
        <div className="w-11/12 m-auto">
          <HeaderSection
            FirstHeading={FirstHeading}
            SecondHeading={SecondHeading}
            HeadingBody={HeadingBody}
            SecondHeadingStyles={SecondHeadingStyles}
            HeadingBodyStyle={HeadingBodyStyle}
          />
        </div>
        <div className="md:w-6/12 w-10/12 m-auto text-center bg-white mt-10 rounded-lg">
          <div className=" text-fuchsia-900 p-5">
            <div>
              <h1 className="md:text-2xl text-xl font-bold ">
                PANS OAU Bank Account
              </h1>
            </div>
            <div className="mt-3">
              <p className="text-lg">
                <span className="font-bold">Account Name:</span>
                Pharmaceutical Association of Nigeria Students, OAU Chapter
              </p>
              <p className="mt-2 text-lg">
                <span className="font-bold">Bank Name:</span> Access Bank PLC
              </p>
              <p className="mt-2 text-lg">
                <span className=" font-bold">Account Number:</span> 0033724878
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportUs;
