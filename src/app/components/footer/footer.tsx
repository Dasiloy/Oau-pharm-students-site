import Image from 'next/image';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
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
