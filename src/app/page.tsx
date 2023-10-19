import React from 'react';
import Hero from './Homepage/Hero';
import AboutUs from './Homepage/AboutUs';
import ThingsWeDo from './Homepage/ThingsWeDo';
import AcademicResources from './Homepage/AcademicResources';
import OurProject from './Homepage/OurProject';
import OurArticles from './Homepage/OurArticles';
import MeetOurAlumni from './Homepage/MeetOurAlumni';
import Ourpathners from './Homepage/Ourpathners';
import BOOK from './Homepage/BOOK';
import SupportUs from './Homepage/SupportUs';

export default function Home() {
  //represent the homepage route.. default rendered as server side component//

  return (
    <main>
      <Hero />
      <AboutUs />
      <ThingsWeDo />
      <AcademicResources />
      <OurProject />
      <OurArticles />
      <MeetOurAlumni />
      <Ourpathners />
      <BOOK />
      <SupportUs />
      <div>Home page</div>
    </main>
  );
}
