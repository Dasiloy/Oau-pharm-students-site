import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import { PANSPoliticsData } from './data';
import Header from '../components/Header';
import PictureLayoutTemplate from '../components/OurActivities/PictureLayoutTemplate';
import president from '../../../public/i.png';
import { PANSPoliticsPicturesData } from './data';
import { PANSPoliticsSecondPicturesData } from './data';
import Image from 'next/image';
import ReversePicturesLayout from '../../app/components/OurActivities/ReversePicturesLayout';
function page() {
  const header = 'Social Events';
  const body = ` PANS OAU makes an effort to ensure that her members are not only bookworms,
     but also have a good time. So, at PANS OAU, we organize a variety of social 
     events such as hangouts, movie nights, parties, and other programs aimed at fostering
      social relationships. PANS OAU makes an effort to ensure that her members are not only 
      bookworms, but also have a good time. So, at PANS OAU, we organize a variety of social
       events such as hangouts, movie nights, parties, and other programs aimed at fostering social relationships.`;
  const secondBody = `In this section, we will provide all necessary details about what is going on with the Academic Affairs in the Faculty.
          Here at PANS OAU we also have our some Organs and Clubs that students can
           join just to gain other extraordinary activities.`;
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={header}
        body={body}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={'font-semibold'}
      />
      <ActivityTopBody
        header={'News on Social Events'}
        body={secondBody}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
      />
      <div className='grid gap-y-5 mt-10 lg:mt-20'>
        {PANSPoliticsData.map((item) => {
          return (
            <BodyTemplate
              key={item.id}
              image={item.image}
              body={item.body}
              id={item.id}
              name={item.title}
            />
          );
        })}
      </div>
      <Header headerContent={'Gallery on Social Events'} />
      <PictureLayoutTemplate
        mappedImages={PANSPoliticsPicturesData}
        sideColumnImages={president}
      />
      <div className=' lg:w-8/12 w-11/12 m-auto gap-x-10 lg:gap-y-10 gap-y-5 mt-20 grid grid-cols-1 lg:grid-cols-3'>
        {PANSPoliticsSecondPicturesData.map((item) => {
          return (
            <div key={item.id} className=' grid justify-center'>
              <Image
                src={item.image}
                key={item.id}
                width={390}
                height={430}
                alt='map'
              />
            </div>
          );
        })}
      </div>
      <ReversePicturesLayout
        mappedImages={PANSPoliticsPicturesData}
        sideColumnImages={president}
      />
    </div>
  );
}

export default page;
