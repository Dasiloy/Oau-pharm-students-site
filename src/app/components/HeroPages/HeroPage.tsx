import React from 'react';
import Image from 'next/image';
interface HeroPage {

  headings: string;
}
const HeroPageCard: React.FC<HeroPage> = ({ headings }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(AboutUs.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat', // Set the height you want
    height: '600px',
  };
  return (
    <div style={backgroundImageStyle} >
      <div className='text-center'>
        <h1 className=' font-extrabold text-6xl text-white pt-60'>{headings}</h1>
      </div>
    </div>
  );
};

export default HeroPageCard;
