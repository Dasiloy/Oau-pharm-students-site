import React from 'react'
import HeroPageCard from './../../components/HeroPages/HeroPage'
import PansOauExecutives from './Components/PansOauExecutives'
const Leadership = () => {
  const headings='About Us'
  return (
    <div>
      <HeroPageCard headings={headings} />
      <PansOauExecutives />
    </div>
  );
}

export default Leadership