import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import ActivityTopBody from '../components/OurActivities/ActivityTopBody';
import BodyTemplate from '../components/OurActivities/BodyTemplate';
import { PANSWeekData } from './data';
import Header from '../components/Header';
import PictureLayoutTemplate from '../components/OurActivities/PictureLayoutTemplate';
import { PANSWeekPicturesData } from './data';
import president from '../../../public/i.png';
import yellow from '../../../public/Healthv.png';
import { PANSWeekSecondPicturesData } from './data';
import { WeekOutreachPicturesData } from './data';
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
  const thirdBody = `
 PANS OAU makes an effort to ensure that her members are not only bookworms, but also have a good time. 
 So, at PANS OAU, we organize a variety of social events such as hangouts, movie nights, parties,
  and other programs aimed at fostering social relationships.
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
      <ActivityTopBody
        header={'PANS WEEK IN PICTURES - 30th April to 6th May, 2023'}
        body={thirdBody}
        ClassName={'lg:mt-20 mt-10 leading-3 lg:leading-4'}
        bodyStyle={''}
      />
      <div className=' grid gap-y-10 lg:gap-y-20'>
        <div>
          <Header headerContent={'Opening Ceremony'} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekPicturesData}
            sideColumnImages={president}
          />
        </div>
        <div>
          <Header headerContent={'Trade Fair & Health Outreach'} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekSecondPicturesData}
            sideColumnImages={yellow}
          />
        </div>
        <div>
          <Header headerContent={'Movie Night & Indoor Games'} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekPicturesData}
            sideColumnImages={president}
          />
        </div>
        <div>
          <Header headerContent={'Parliamentary Conference '} />
          <PictureLayoutTemplate
            mappedImages={WeekOutreachPicturesData}
            sideColumnImages={yellow}
          />
        </div>
        <div>
          <Header headerContent={'PANS League Final'} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekSecondPicturesData}
            sideColumnImages={yellow}
          />
        </div>
        <div>
          <Header headerContent={'Variety Night'} />
          <PictureLayoutTemplate
            mappedImages={WeekOutreachPicturesData}
            sideColumnImages={yellow}
          />
        </div>
        <div>
          <Header headerContent={'Sade Olafimihan Interfaculty Debate'} />
          <PictureLayoutTemplate
            mappedImages={WeekOutreachPicturesData}
            sideColumnImages={yellow}
          />
        </div>
        <div>
          <Header headerContent={'Dinner Famasiwambe'} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekPicturesData}
            sideColumnImages={president}
          />
        </div>
        <div>
          <Header headerContent={'Skill Acquisition '} />
          <PictureLayoutTemplate
            mappedImages={PANSWeekPicturesData}
            sideColumnImages={president}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
