import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../../app/components/OurActivities/ActivityTopBody';
import BodyTemplate from '../../app/components/OurActivities/BodyTemplate';
import { AcademicActivitiesData } from '../AcademicActivities/data';
import Header from '../../app/components/Header'
import { AcademicActivitiesPicturesData } from '../AcademicActivities/data';
import { AcademicSecondPicturesData } from '../AcademicActivities/data';
import PictureLayoutTemplate from '../../app/components/OurActivities/PictureLayoutTemplate';
import president from '../../../public/i.png' 
import Image from 'next/image';
import ReversePicturesLayout from '../../app/components/OurActivities/ReversePicturesLayout'
function Page() {
  const header = 'Academic Activities';
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
        ClassName={'mt-20 leading-4'}
        bodyStyle={'font-semibold'}
      />
      <ActivityTopBody
        header={'News on Academic Activities'}
        body={secondBody}
        ClassName={'mt-20 leading-4'}
      />
      <div className='grid gap-y-5 mt-20'>
        {AcademicActivitiesData.map((item) => {
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
        mappedImages={AcademicActivitiesPicturesData}
        sideColumnImages={president}
      />
      <div className=' w-8/12 m-auto gap-x-10 gap-y-10 mt-20 grid grid-cols-3'>
        {AcademicSecondPicturesData.map((item) => {
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
        mappedImages={AcademicActivitiesPicturesData}
        sideColumnImages={president}
      />
    </div>
  );
}

export default Page;
