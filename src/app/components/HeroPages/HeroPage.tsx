import React from 'react';
import Image from 'next/image';
interface HeroPage {

  headings: string;
}
const HeroPageCard: React.FC<HeroPage> = ({ headings }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(AboutUs.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Set the height you want
    height: '511px',
  };
  return (
    <div className='bg-[url("/AboutUs.png")] bg-cover bg-center grid items-center h-[200px] lg:h-[511px]'>
      <div className='text-center'>
        <h1 className=' font-extrabold text-4xl md:text-6xl text-white '>
          {headings}
        </h1>
      </div>
    </div>
  );
};

export default HeroPageCard;
