import React from "react";
import AlumniHero from "./component/AlumniHero";
import AlumniIntroduction from "./component/AlumniIntroduction";
import AlumniCoversation from "./component/AlumniCoversation";
import OtherAlumni from "./component/OtherAlumni";
function page() {
  return (
    <div>
      <AlumniHero />
      <AlumniIntroduction />
      <AlumniCoversation />
      <OtherAlumni />
    </div>
  );
}

export default page;
