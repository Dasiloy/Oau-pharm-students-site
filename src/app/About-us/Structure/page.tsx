import React from 'react'
import HeroPageCard from '../../components/HeroPages/HeroPage';
import BriefHistory from './AboutComponent/BriefHistory'
import OrgansAndClubs from './AboutComponent/OrgansAndClubs'
const Structure = () => {
  const headings='About Us'
  return (
    <div>
      <HeroPageCard 
      headings={headings} />
      <BriefHistory />
      <OrgansAndClubs />
    </div>
  );
}

export default Structure