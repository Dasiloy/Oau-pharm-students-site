import React from 'react'
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import {DebatePicturesData} from './data'
import {DebatesPicturesData} from './data'
import {DebateSecondPicturesData} from './data'
import Header from '../components/Header';
import PictureLayoutTemplate from '../components/OurActivities/PictureLayoutTemplate';
import ReversePicturesLayout from '../components/OurActivities/ReversePicturesLayout';
import Image from 'next/image';
import Nero from '../../../public/Idebate.png'
function Page() {
  const body = `
  PANS OAU makes an effort to ensure that her members are not only bookworms, 
  but also have a good time. So, at PANS OAU, we organize a variety of social
   events such as hangouts, movie nights, parties, and other programs aimed at
    fostering social relationships. PANS OAU makes an effort to ensure that her
     members are not only bookworms, but also have a good time. So, at PANS OAU, 
     we organize a variety of social events such as hangouts, movie nights, parties,
      and other programs aimed at fostering social relationships.
  `;
  const secondBody = `
  In this section, we will provide all necessary details about what is going on with
   the Debate Competitions in the Faculty. Here at PANS OAU we also have our some Organs
    and Clubs that students can join just to gain other extraordinary activities. 
  `;
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={'Debate Competitions'}
        body={body}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={'font-semibold'}
      />
      <ActivityTopBody
        header={'News on Debate Competitions'}
        body={secondBody}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={'font-semibold'}
      />
      <div className='grid gap-y-5 mt-20'>
        {DebatePicturesData.map((item) => {
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
      <Header headerContent={'Gallery on Debate Activities'} />
      <PictureLayoutTemplate
        mappedImages={DebatesPicturesData}
        sideColumnImages={Nero}
      />
      <div className='  lg:w-8/12 w-11/12 m-auto gap-x-10 lg:gap-y-10 gap-y-5 mt-20 grid grid-cols-1 lg:grid-cols-3'>
        {DebateSecondPicturesData.map((item) => {
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
        mappedImages={DebatesPicturesData}
        sideColumnImages={Nero}
      />
    </div>
  );
}

export default Page