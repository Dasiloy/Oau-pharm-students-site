import React from "react";
import OurProjectsCardSlip from "../components/Cards/OurProjectsCards";
import OurProjects from "../Data/HomePageData/OurProjectData";
function OurProject() {
  const backgroundImage = {
    backgroundImage: "url(/ProjectBackground.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="md:mt-32 mt-20 md:relative h-fit ">
      <div style={backgroundImage} className="ourProject">
        <div className="w-10/12 md:mt-10 mt-7 m-auto text-white">
          <div className=" w-11/12 md:w-7/12 pt-16 md:pt-20">
            <h1 className="text-orange text-md md:text-xl font-bold">
              OTHER THINGS BY US
            </h1>
            <h1 className="md:text-5xl text-4xl mt-5 font-bold">
              Our Projects
            </h1>
            <p className="md:text-xl text-lg mt-10 md:leading-4">
              PANS OAU makes an effort to ensure that her members are not only
              bookworms, but also have a good time. So, at PANS OAU, we organize
              a variety of social events such as hangouts, movie nights,
              parties, and other programs aimed at fostering social
              relationships.
            </p>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 justify-center gap-10 gap-y-5 lg:grid-cols-3 lg:w-10/12 m-auto -mt-32">
        {OurProjects.map((e) => {
          return (
            <div key={e.id} className="">
              <OurProjectsCardSlip
                image={e.image}
                headings={e.title}
                body={e.body}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurProject;
