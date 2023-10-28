import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import WhyUs from './components/WhyNeed';
import Reach from './components/Reach';
import Image from 'next/image';
function SupportUs() {
  const headings = 'Support Us';
  return (
    <div>
      <HeroPageCard headings={headings} />
      <WhyUs />
      <Reach />
      <div className='mt-20 flex justify-center'>
        <Image src='/map.png' 
        alt='map'
        width={1440}
        height={733}
        />
      </div>
    </div>
  );
}

export default SupportUs;
