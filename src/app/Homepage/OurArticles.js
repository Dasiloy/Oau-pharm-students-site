import React from "react";
import Button from "../components/button/button";
import OurArticlesCard from "../components/Cards/OurArticlesCard";
import OurArticlesData from "../Data/HomePageData/OurArticlesData";
function OurArticles() {
  const text = "view more";
  const displayProperties = "bg-fuchsia-800 text-white";
  return (
    <div className="md:mt-32 mt-20">
      <div className="text-center w-11/12 md:w-9/12 m-auto">
        <div>
          <h1 className="text-3xl text-orange font-bold">Our News</h1>
          <h1 className="md:text-5xl text-4xl font-bold mt-3 ">Our Articles</h1>
        </div>
        <div className="md:mt-5 mt-3">
          <p className="md:text-xl text-lg">
            PANS OAU make sure you can meet the old alumni. So, at PANS OAU, we
            organize a variety of social events such as hangouts, movie nights,
            parties, and other programs aimed at fostering social relationships.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 w-9/12 md:w-8/12 m-auto mt-14">
        {OurArticlesData.map((e) => {
          return (
            <div key={e.id} className="flex justify-center">
              <OurArticlesCard
                image={e.image}
                headings={e.title}
                body={e.body}
                avatar={e.avartar}
                name={e.name}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-14">
        <Button text={text} displayProperties={displayProperties} />
      </div>
    </div>
  );
}

export default OurArticles;
