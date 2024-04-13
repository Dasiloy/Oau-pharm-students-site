'use client'
import Image from 'next/image';
import React from 'react';
import { CiCircleChevLeft } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
function AlumniHero() {
  const router=useRouter()
  const backMoves=()=>{
    router.back()
  }
  return (
    <div className=' bg-fuchsia-800'>
      <div className='m-auto w-11/12 md:w-8/12 pt-10 md:pt-20 '>
        <div className='flex justify-between w-11/12 m-auto md:m-0 gap-5  md:w-10/12'>
          <div onClick={backMoves} className='flex w-fit'>
            <CiCircleChevLeft
              className=' bg-white flex rounded-full'
              color='purple'
              size='40'
            />
          </div>
          <div>
            <h1 className='text-3xl md:text-5xl font-bold text-white'>
              Meet the Alumni of the Month
            </h1>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 items-center mt-20 gap-10 w-10/12 m-auto pb-20'>
        <div className='flex justify-center'>
          <Image
            alt='sponsor'
            src='/PharmAdejuwon.png'
            width={500}
            height={300}
          />
        </div>
        <div className='md:w-10/12 w-11/12 m-auto md:m-0'>
          <h1 className='md:text-5xl text-3xl text-orange font-bold'>
            Interview with Pharm. Adejuwon Otelaja
          </h1>
          <p className=' text-xl leading-4 text-white mt-10 italic'>
            “At the end, technology is not just transforming pharmacy practice;
            it’s revolutionizing it. As pharmacists, we must embrace this
            change, adapt to it, and leverage it to enhance our practice,
            improve patient care, and advance our profession”.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlumniHero;
