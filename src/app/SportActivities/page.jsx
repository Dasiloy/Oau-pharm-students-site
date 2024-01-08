import React from 'react'
import Formation from '../../app/../../public/Formation.png';
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import Header from '../components/Header';
import Image from 'next/image';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import { SportData } from './data';
import PictureLayoutTemplate from '../components/OurActivities/PictureLayoutTemplate';
import ReversePicturesLayout from '../components/OurActivities/ReversePicturesLayout';
import {SportPicturesData} from './data'
import {SportSecondPicturesData} from './data'
import upball from '../../../public/Sportv.png'
function page() {
  const body = `
  PANS OAU makes an effort to ensure that her members are not only bookworms,
   but also have a good time. So, at PANS OAU, we organize a variety of social events
    such as hangouts, movie nights, parties, and other programs aimed at fostering social relationships. 
    PANS OAU makes an effort to ensure that her members are not only bookworms, but also have a good time.
     So, at PANS OAU, we organize a variety of social events such as hangouts, movie nights, parties, and
      other programs aimed at fostering social relationships.
  `;
  const secondBody = `
  In this section, we will provide all necessary details about what is going on with the Sport Activities
   in the Faculty. Here at PANS OAU we also have our some Organs and Clubs that students can join just
    to gain other extraordinary activities. 
  `;
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={'Sport Activities'}
        body={body}
        ClassName={'lg:mt-20 mt-10 leading-4'}
        bodyStyle={'font-semibold'}
      />
      <Header headerContent={'PANS OAU Faculty Team '} />
      <div className='grid justify-center mt-5'>
        <Image src={Formation} />
      </div>
      <ActivityTopBody
        header={'News on Sport Activities'}
        body={secondBody}
        ClassName={'mt-20 leading-4'}
        bodyStyle={''}
      />
      <div className='grid gap-y-5 mt-20'>
        {SportData.map((item) => {
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
      <Header headerContent={'Gallery on Sport Activities '} />
      <PictureLayoutTemplate
        mappedImages={SportPicturesData}
        sideColumnImages={upball}
      />
      <div className='  lg:w-8/12 w-11/12 m-auto gap-x-10 lg:gap-y-10 gap-y-5 mt-20 grid grid-cols-1 lg:grid-cols-3'>
        {SportSecondPicturesData.map((item) => {
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
        mappedImages={SportPicturesData}
        sideColumnImages={upball}
      />
    </div>
  );
}

export default page