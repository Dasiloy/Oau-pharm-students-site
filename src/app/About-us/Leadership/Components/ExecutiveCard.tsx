import React from 'react';
import Image from 'next/image';
interface ExecutivesPage {
  image: string;
  title: string;
  name: string;
  // id:number
}
const ExecutiveCard: React.FC<ExecutivesPage> = ({ image, title, name }) => {
  return (
    <div className='w-fit relative'>
      <div className=''>
        <Image
          src={image}
          width={400}
          alt='executives'
          height={400}
        />
        <div className=' backdrop-blur-lg bottom-0 text-center w-full rounded-b-lg absolute'>
          <div className='p-5'>
            <h1 className=' text-lg font-bold'>{name}</h1>
            <h1 className='font-bold mt-3'>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCard;
