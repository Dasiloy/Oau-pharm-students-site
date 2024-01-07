import React from 'react';
import Image from 'next/image';

function PictureLayoutTemplate({ mappedImages=[], sideColumnImages }) {
  return (
    <div className=' w-8/12 m-auto mt-10'>
      <div className='grid grid-cols-3  gap-x-10 m-auto'>
        <div className=' col-span-2 grid gap-y-16 grid-cols-2 '>
          {mappedImages.map((item) => {
            return (
              <div className=' grid  justify-center items-center'>
              <Image
                src={item.image}
                key={item.id}
                width={390}
                height={430}
                alt='map'
              /></div>
            );
          })}
        </div>
        <div className='cols-span-1 h-full  '>
          <Image
            src={sideColumnImages}
            // width={390}
            // height={1000}
            // alt='m'
            className='h-[900px] w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default PictureLayoutTemplate;
