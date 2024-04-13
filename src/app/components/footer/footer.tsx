import Image from 'next/image';
import React from 'react';

import  FooterSecond from './footerSections/FooterSecond'
import Download from './footerSections/Download'
import FooterThird from './footerSections/FooterThird'
const Footer = () => {
  return (
    <div className=' mt-20 text-lg bg-slate-800'>
      <Download />
      <div className=' border-b border-b-white '>
       <FooterSecond />
      </div>
       <FooterThird />
    </div>
  );
};

export default Footer;
