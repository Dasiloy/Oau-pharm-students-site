import React from 'react'
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import {PANSWeekData} from './data'
function page() {
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
 In this section, we will provide all necessary details about what is going on
  with the Health Outreaches in the Faculty. Here at PANS OAU we also have our 
  some Organs and Clubs that students can join just to gain other extraordinary activities. 
 `;
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={'PANS Week'}
        body={body}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={'font-semibold'}
      />
      <ActivityTopBody
        header={'News on PANS Week'}
        body={secondBody}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={''}
      />
      <div className='grid gap-y-5 mt-20'>
        {PANSWeekData.map((item) => {
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
    </div>
  );
}

export default page