import Image from 'next/image';
import React from 'react';
import {AboutData} from '../AboutData/AboutData'
interface Clubs {
  name: string;
  body: string;
  image: string;
  id:number
}

const HeroPageCard: React.FC<Clubs> = ({ name, body, image,id }) => {
  return (
    <div
      className={` gap-x-20 pb-10 grid grid-cols-1 gap-y-5 md:flex items-center  ${
        id % 2 ? '' : 'flex-row-reverse'
      }  ${id === 10 ? '' : 'border-b border-b-slate-300'}`}>
      <div>
        <Image
          src={image}
          alt=''
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className='text-3xl font-bold text-fuchsia-800'>{name}</h1>
        <p className='mt-5 text-lg leading-3'>{body}</p>
        <p className=' text-lg'>
          To join {name}<a href='' className='text-fuchsia-800'> click here</a>
        </p>
      </div>
    </div>
  );
};

function OrgansAndClubs() {
  return (
    <div>
      <div className='text-center w-11/12 md:w-9/12 m-auto mt-20 md:mt-32'>
        <h1 className='md:text-4xl text-3xl text-orange font-bold'>Organs & Clubs</h1>
        <p className='text-xl mt-5 leading-3 md:leading-4'>
          Here at PANS OAU we also have our some Organs and Clubs that students
          can join just to gain other extraordinary activities. This will allow
          them to be useful for the society and community at large.{' '}
        </p>
      </div>
      <div className='grid gap-y-10 mt-10'>
        {AboutData.map((e)=>{
            return (
              <div key={e.id} className='w-10/12 md:w-9/12 m-auto'>
                <HeroPageCard
                  name={e.name}
                  body={e.body}
                  image={e.image}
                  id={e.id}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default OrgansAndClubs;
