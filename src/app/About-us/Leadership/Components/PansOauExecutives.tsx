import React from 'react';
import ExecutiveCard from './ExecutiveCard';
import {
  PansOauExecutiveData,
  PharmacyRepCouncil,
  HeadOfCouncil,
  WebsiteCommitee,
} from '../Data/PansOauExecutiveData';
function PansOauExecutives() {
  const executiveStyles =
    'w-10/12 m-auto grid grid-cols-1 gap-y-5 justify-center md:grid-cols-4 gap-5 mt-10';
    const subExecutiveStyle =
      'text-center w-11/12 m-auto text-3xl md:text-4xl font-bold text-orange ';
  return (
    <div className='grid gap-y-20 md:gap-y-28'>
      <div>
        <div className={`${subExecutiveStyle}  mt-20`}>
          <h1>PANS OAU 2022/2023 Executive Council</h1>
        </div>
        <div className={`${executiveStyles}`}>
          {PansOauExecutiveData.map((e) => {
            return (
              <div className=' justify-center grid' key={e.id}>
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
        <div>
          <div className={`${subExecutiveStyle}`}>
            <h1>Pharmacy Students’ Representative Council (PRSC) 2022/2023</h1>
          </div>
          <div className={`${executiveStyles}`}>
            {PharmacyRepCouncil.map((e) => {
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
      <div>
        <div className={`${subExecutiveStyle}`}>
          <h1>PANS OAU 2022/2023 Head of Committee</h1>
        </div>
        <div className={`${executiveStyles}`}>
          {HeadOfCouncil.map((e) => {
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
          <h1>Website Management Committee Members</h1>
        </div>
        <div className={`${executiveStyles}`}>
          {WebsiteCommitee.map((e) => {
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
  );
}

export default PansOauExecutives;
