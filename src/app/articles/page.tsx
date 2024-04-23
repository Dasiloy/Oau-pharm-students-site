import React, { useState } from 'react';
import Image from 'next/image';
import { health } from './data';
import { events } from './data';
import { special } from './data';
import { more } from './data';
import { brands } from './data';

import { Poppins } from 'next/font/google';
const Articles = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[6rem]'>
      <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-[200px] lg:h-[500px] w-full'>
        <h1 className='font-extrabold text-[24px] lg:text-[56px] flex items-center justify-center text-white'>
          ARTICLES
        </h1>
      </div>
      <div className='flex flex-col  items-center justify-center'>
        <h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>
          Our Articles
        </h2>
        <p className='text-dark-dark-100 text-[18px] font-normal items-center justify-center text-center w-[80%]'>
          PANS OAU makes an effort to ensure that her members are not only
          bookworms, but also have a good time. So, at PANS OAU, we organize a
          variety of social events such as hangouts, movie nights, parties, and
          other programs aimed at fostering social relationships.
        </p>
      </div>

      <div className='grid justify-center items-center px-[2rem] gap-4 lg:w-11/12 m-auto'>
        <h1 className='font-bold lg:w-11/12 lg:m-auto  text-[32px] text-dark-dark-100 '>
          Health/Sciences
        </h1>
        <div className=' flex flex-col items-center justify-center gap-[3rem] '>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 '>
            {health.map((hlt) => (
              <div key={hlt.authorname} className=' '>
                <div className=' flex flex-col gap-4 shadow-lg rounded-lg lg:w-10/12 m-auto justify-center'>
                  <div className=''>
                  <Image
                    src={hlt.artimg}
                    alt='coverimg'
                    height={500}
                    width={650}
                    className=' w-full'
                  />

                  </div>
                  <div className='w-11/12 m-auto pb-5'>
                  <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                    {hlt.header}
                  </h2>
                  <p className='font-normal text-[14px] text-dark-dark-100 mt-3 w-[90%]'>
                    {hlt.text}
                  </p>
                  <div className='flex flex-row mt-3  gap-2'>
                    <Image
                      src={hlt.author}
                      width={50}
                      height={50}
                      alt="author's picture"
                    />
                    <div className='flex flex-col '>
                      <h5 className='font-bold text-dark-dark-100 text-[16px]'>
                        {hlt.authorname}
                      </h5>
                      <h5 className='font-normal text-dark-dark-100 text-[12px]'>
                        {hlt.role}
                      </h5>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className=' rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent hover:text-primary-500'>
            Read More
          </button>
        </div>
      </div>
      <div className='grid justify-center items-center px-[2rem] gap-4'>
        <h1 className='font-bold  text-[32px] text-dark-dark-100 '>
          News/Events
        </h1>
        <div className=' flex flex-col items-center justify-center gap-[3rem]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 '>
            {events.map((eve) => (
              <div key={eve.authorname} className=''>
                <div className=' flex flex-col gap-4'>
                  <Image
                    src={eve.artimg}
                    alt='coverimg'
                    className=''
                  />
                  <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                    {eve.header}
                  </h2>
                  <p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>
                    {eve.text}
                  </p>
                  <div className='flex flex-row  gap-2'>
                    <Image
                      src={eve.author}
                      alt="author's picture"
                    />
                    <div className='flex flex-col '>
                      <h5 className='font-bold text-dark-dark-100 text-[16px]'>
                        {eve.authorname}
                      </h5>
                      <h5 className='font-normal text-dark-dark-100 text-[12px]'>
                        {eve.role}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='flex items-center justify-center rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent hover:text-primary-500'>
            Read More
          </button>
        </div>
      </div>
      <div className='grid justify-center items-center px-[2rem] gap-4'>
        <h1 className='font-bold  text-[32px] text-dark-dark-100 '>
          News/Events
        </h1>
        <div className=' flex flex-col items-center justify-center gap-[3rem]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 '>
            {special.map((spc) => (
              <div key={spc.authorname} className=''>
                <div className=' flex flex-col gap-4'>
                  <Image
                    height={500}
                    src={spc.artimg}
                    width={650}
                    alt='coverimg'
                    className=''
                  />
                  <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                    {spc.header}
                  </h2>
                  <p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>
                    {spc.text}
                  </p>
                  <div className='flex flex-row  gap-2'>
                    <Image
                      height={50}
                      src={spc.author}
                      width={50}
                      alt="author's picture"
                    />
                    <div className='flex flex-col '>
                      <h5 className='font-bold text-dark-dark-100 text-[16px]'>
                        {spc.authorname}
                      </h5>
                      <h5 className='font-normal text-dark-dark-100 text-[12px]'>
                        {spc.role}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='flex items-center justify-center rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent hover:text-primary-500'>
            Read More
          </button>
        </div>
      </div>
      <div className='grid justify-center items-center px-[2rem] gap-4'>
        <h1 className='font-bold  text-[32px] text-dark-dark-100 '>
          More Stories
        </h1>
        <div className=' flex flex-col items-center justify-center gap-[3rem]'>
          <div className='grid lg:grid-cols-3 grid-row  items-center justify-center gap-8 '>
            {more.map((mor) => (
              <div key={mor.authorname} className=''>
                <div className=' flex flex-col gap-4'>
                  <Image
                    height={500}
                    src={mor.artimg}
                    alt='coverimg'
                    width={500}
                    className=''
                  />
                  <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                    {mor.header}
                  </h2>
                  <p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>
                    {mor.text}
                  </p>
                  <div className='flex lg:flex-row  gap-2'>
                    <Image
                      height={50}
                      src={mor.author}
                      width={50}
                      alt="author's picture"
                    />
                    <div className='flex flex-col '>
                      <h5 className='font-bold text-dark-dark-100 text-[16px]'>
                        {mor.authorname}
                      </h5>
                      <h5 className='font-normal text-dark-dark-100 text-[12px]'>
                        {mor.role}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Articles;
