import React from 'react';
import { AdvisersData, Lecturers } from './data/AdvisersData';
import ExecutiveCard from '../Leadership/Components/ExecutiveCard';
import HeroPageCard from './../../components/HeroPages/HeroPage';
const advisers = () => {
  const executiveStyles =
    'w-10/12 m-auto grid grid-cols-1 gap-y-5 md:grid-cols-4 gap-5 mt-10';
  const subExecutiveStyle =
    'text-center w-10/12 m-auto text-3xl md:text-4xl font-bold text-orange ';
    const headings='About Us'
  return (
    <div>
      <HeroPageCard headings={headings} />
      <div className='grid gap-y-20 md:gap-y-28'>
        <div>
          <div className={`${subExecutiveStyle} mt-20`}>
            <h1>Meet Our Advisers</h1>
          </div>
          <div className={`${executiveStyles}`}>
            {AdvisersData.map((e) => {
              return (
                <div
                  className=' justify-center grid'
                  key={e.id}>
                  <ExecutiveCard
                    name={e.name}
                    title={e.title}
                    image={e.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className={`${subExecutiveStyle}`}>
            <h1>Meet Our Lecturers</h1>
          </div>
          <div className={`${executiveStyles}`}>
            {Lecturers.map((e) => {
              return (
                <div
                  className=' justify-center grid'
                  key={e.id}>
                  <ExecutiveCard
                    name={e.name}
                    title={e.title}
                    image={e.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default advisers;
