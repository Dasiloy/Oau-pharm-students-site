import React from 'react';
import Button from '../button/button';
import Image from 'next/image';
function BodyTemplate({ image, name, body, className, id }) {
  return (
    <div className=' w-10/12 lg:w-9/12 m-auto'>
      <div
        className={` gap-x-20 pb-10 grid ${className} grid-cols-1 gap-y-5 lg:flex items-center justify-between  ${
          id % 2 ? '' : 'flex-row-reverse'
        } `}>
        <div className=' lg:w-5/12 col-span-1 grid justify-center'>
          <div>
            <Image
              src={image}
              alt=''
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className=' flex-1'>
          <h1 className='lg:text-3xl text-xl w-11/12 lg:w-10/12 lg:leading-4 leading-3 font-bold text-[#333333]'>{name}</h1>
          <h1 className='mt-5 lg:text-lg text-md leading-3 lg:leading-4'>{body}</h1>
          <div className=' mt-10'>
            <Button
              text={'Read More'}
              displayProperties={'bg-[#9D5086] text-white'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyTemplate;
