import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import Header from '../components/Header';
import { Award } from './data';
import Image from 'next/image';
import { AwardPicturesData } from './data';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import PictureLayoutTemplate from '../components/OurActivities/PictureLayoutTemplate';
import ReversePicturesLayout from '../components/OurActivities/ReversePicturesLayout';
import { AwardsPicturesData } from './data';
import { AwardSecondPicturesData } from './data';
import president from '../../../public/i.png'; 
function Page() {
  const secondBody = `
  PANS OAU makes an effort to ensure that her members are not only bookworms,
   but also have a good time. So, at PANS OAU, we organize a variety of social
    events such as hangouts, movie nights, parties, and other programs aimed at
     fostering social relationships. PANS OAU makes an effort to ensure that her
      members are not only bookworms, but also have a good time. So, at PANS OAU,
       we organize a variety of social events such as hangouts, movie nights, parties,
        and other programs aimed at fostering social relationships.
  `;
  const News = `
  In this section, we will provide all necessary details about what is going on with 
  the Health Outreaches in the Faculty. Here at PANS OAU we also have our some Organs 
  and Clubs that students can join just to gain other extraordinary activities. 
  `;
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={'News on Award & Recognition'}
        body={secondBody}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={'font-semibold'}
      />
      <Header headerContent={'2021/2022 Award Recognition for All Parts'} />
      <div className=' grid lg:grid-cols-2 gap-10 w-8/12 m-auto mt-10'>
        {Award.map((item) => {
          return (
            <div
              key={item.id}
              className=' grid justify-center '>
              <Image
                height={714}
                width={593}
                alt=''
                src={item.image}
                key={item.id}
              />
            </div>
          );
        })}
      </div>
      <ActivityTopBody
        header={'News on Award & Recognition'}
        body={News}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={''}
      />
      <div className=' mt-10'>
        {AwardPicturesData.map((item) => {
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
      <Header headerContent={'Gallery on Academic Activities'} />
      <PictureLayoutTemplate
        mappedImages={AwardsPicturesData}
        sideColumnImages={president}
      />
      <div className=' lg:w-8/12 w-11/12 m-auto gap-x-10 lg:gap-y-10 gap-y-5 mt-20 grid grid-cols-1 lg:grid-cols-3'>
        {AwardSecondPicturesData.map((item) => {
          return (
            <div className=' grid justify-center'>
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
        mappedImages={AwardsPicturesData}
        sideColumnImages={president}
      />
    </div>
  );
}

export default Page;
