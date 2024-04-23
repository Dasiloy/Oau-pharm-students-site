import React from 'react';
import Image from 'next/image';

function PictureLayoutTemplate({ mappedImages=[], sideColumnImages }) {
  return (
    <div className=' w-11/12 lg:w-8/12 m-auto mt-5 lg:mt-10'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-10 lg:gap-y-0  gap-x-10 m-auto'>
        <div className=' col-span-2 grid gap-10 lg:gap-y-16 gap-y-10 lg:grid-cols-2 grid-cols-1 '>
          {mappedImages.map((item) => {
            return (
              <div key={item.id} className=' grid justify-center items-center'>
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
        <div className='cols-span-1 h-full   '>
          <Image
            src={sideColumnImages}
           width={390}
            height={1000}
            alt='m'
            
          />
        </div>
      </div>
    </div>
  );
}

export default PictureLayoutTemplate;
