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
import Image from 'next/image';
export default function Home() {
  //represent the homepage route.. default rendered as server side component//
  const backgroundImageStyle = {
    backgroundImage: 'url(/backgroundP.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Set the height you want
  };
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
    </main>
  );
}
