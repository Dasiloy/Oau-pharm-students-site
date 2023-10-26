import React from 'react';
import HeroPageCard from '../components/HeroPages/HeroPage';
import WhyUs from './components/WhyNeed';
import Reach from './components/Reach';
function SupportUs() {
  const headings = 'Support Us';
  return (
    <div>
      <HeroPageCard headings={headings} />
      <WhyUs />
      <Reach />
    </div>
  );
}

export default SupportUs;


