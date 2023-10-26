import React, { useState } from 'react';

import { health } from './data';
import { events } from './data';
import { special } from './data';
import { more } from './data';
import { brands } from './data';

import { Poppins } from 'next/font/google';
const Articles = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-12'>
        <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-96 w-full'>
          <h1 className='font-bold text-[56px] text-white'>ARTICLES</h1>
        </div>
        <div className='flex flex-col  items-center justify-center'>
          <h2 className='font-bold text-[40px] text-[#ECBB55]'>Our Articles</h2>
          <p className='text-dark-dark-100 text-[18px] font-normal items-center justify-center text-center w-[80%]'>
            PANS OAU makes an effort to ensure that her members are not only
            bookworms, but also have a good time. So, at PANS OAU, we organize a
            variety of social events such as hangouts, movie nights, parties,
            and other programs aimed at fostering social relationships.
          </p>
        </div>

        <div className='grid justify-center items-center px-[2rem] gap-4'>
          <h1 className='font-bold  text-[32px] text-dark-dark-100 '>
            Health/Sciences
          </h1>
          <div className=' flex flex-col items-center justify-center gap-[3rem]'>
            <div className='grid grid-cols-2 items-center justify-center gap-8 '>
              {health.map((hlt) => (
                <div className=''>
                  <div className=' flex flex-col gap-4'>
                    <img
                      src={hlt.artimg}
                      alt='coverimg'
                      className=''
                    />
                    <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                      {hlt.header}
                    </h2>
                    <p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>
                      {hlt.text}
                    </p>
                    <div className='flex flex-row  gap-2'>
                      <img
                        src={hlt.author}
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
            <div className='grid grid-cols-2 items-center justify-center gap-8 '>
              {events.map((eve) => (
                <div className=''>
                  <div className=' flex flex-col gap-4'>
                    <img
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
                      <img
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
            <div className='grid grid-cols-2 items-center justify-center gap-8 '>
              {special.map((spc) => (
                <div className=''>
                  <div className=' flex flex-col gap-4'>
                    <img
                      src={spc.artimg}
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
                      <img
                        src={spc.author}
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
            <div className='grid grid-cols-3 items-center justify-center gap-8 '>
              {more.map((mor) => (
                <div className=''>
                  <div className=' flex flex-col gap-4'>
                    <img
                      src={mor.artimg}
                      alt='coverimg'
                      className=''
                    />
                    <h2 className='font-semibold text-primary-500 x]text-[20px] cursor-pointer'>
                      {mor.header}
                    </h2>
                    <p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>
                      {mor.text}
                    </p>
                    <div className='flex flex-row  gap-2'>
                      <img
                        src={mor.author}
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
        <div className='grid grid-cols-4 my-[5rem]'>
          {brands.map((brand) => (
            <div className=''>
              <img
                src={brand.brand}
                alt='brands'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
