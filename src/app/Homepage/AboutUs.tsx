import React from "react";
import Button from "../components/button/button";
import Image from "next/image";
import HeadWriter from '@/app/components/Typewritter'
interface Aboutus {
  image: string;
  content: string;
}
const AboutUsComponent: React.FC<Aboutus> = ({ image, content }) => {
  const text = 'Read more';
  const displayProperties = 'bg-fuchsia-900 text-white mt-12';
  return (
    <div className='grid grid-cols-1 gap-10  gap-y-5 lg:grid-cols-2 w-10/12 lg:9/12 md:w-9/12 m-auto'>
      <div>
        <Image
          width={611}
          height={522}
          alt=''
          src={image}
        />
      </div>
      <div>
        <div>
          <HeadWriter textLines=' why are we called pharmaco?' />
          <h1 className='text-3xl ld:text-4xl font-bold mt-3'>About Us</h1>
        </div>
        <div className='md:text-lg text-md mt-5 leading-3 md:leading-4'>
          {content}
        </div>
        <Button
          text={text}
          displayProperties={displayProperties}
        />
      </div>
    </div>
  );
};
function AboutUs() {
  const AboutUsComponentData = {
    image: "/aboutUsImage.svg",
    content:
      "Pharmacy was first established as a Department in the former Nigerian College of Arts,\
Science and Technology, Ibadan Branch, in the year 1957. It, however, continued to award Diploma in Pharmacy till June 1965 while concurrently a programme for the B. Pharm. degree was started in September 1963.\
The Senate of the University decided during the 1968/69 session to upgrade the Department into a full Faculty status from 1st October, 1969, with four main departments: Pharmaceutical Chemistry, Pharmacology, Pharmacognosy and Pharmaceutics.",
  };
  return (
    <div className=" mt-32">
      <AboutUsComponent
        image={AboutUsComponentData.image}
        content={AboutUsComponentData.content}
      />
    </div>
  );
}

export default AboutUs;
