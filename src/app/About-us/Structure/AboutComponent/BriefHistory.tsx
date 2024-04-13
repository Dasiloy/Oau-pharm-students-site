import React from 'react';
import Button from '@/app/components/button/button';
import Image from 'next/image';
function BriefHistory() {
  const firstParagraph =
    'Pharmacy was first established as a Department in the former Nigerian College of Arts, Science and Technology, Ibadan Branch, in the year 1957.\
    When the University of Ife (now Obafemi Awolowo University) was established in 1962, it remained a Department within the Faculty of Science.\
     It, however, continued to award Diploma in Pharmacy till June 1965 while concurrently a programme for the B. Pharm. degree was started in September 1963.';
  const secondParagraph =
    'The Senate of the University decided during the 1968/69 session to upgrade the Department into a full Faculty status from 1st October, 1969, with four main\
departments: Pharmaceutical Chemistry, Pharmacology, Pharmacognosy and Pharmaceutics. Consequently, the growth of the Faculty continued at the Ibadan Campus\
 of the University until it transferred to her present building on the Ile-Ife (home) campus in September 1972.';

  const thirdParagraph = 'There are currently in the Faculty the following five academic departments and one Unit: o Department of Clinical Pharmacy\
 and Pharmacy Administration o Department of Pharmaceutical Chemistry o Department of Pharmaceutics o Department of Pharmacognosy\
  o Department of Pharmacology o Drug Research and Production Unit The Faculty also has established postgraduate programmes in all her \
  departments and Unit. The staff development programme of the University contributed immensely towards the availability of Teaching and \
  Research in the Faculty of Pharmacy';
  const text = 'View Constitution';
  const properties = 'text-white  bg-fuchsia-900';
  return (
    <div>
      <div>
        <h1 className=' text-orange text-3xl md:text-4xl text-center mt-10 font-extrabold '>
          Brief History About PANS OAU
        </h1>
      </div>
      <div className='m-auto w-11/12 md:w-9/12 mt-8 leading-3 md:leading-4'>
        <h1 className='text-center text-xl'>{firstParagraph}</h1>
        <h1 className='text-center text-xl'>{secondParagraph}</h1>
        <h1 className='text-center text-xl'>{thirdParagraph}</h1>
      </div>
      <div className='flex justify-center mt-10'>
        <Button
          text={text}
          displayProperties={properties}
        />
      </div>
      <div className='flex mt-20 justify-center w-11/12 m-auto'>
        <Image
          alt=''
          width={1000}
          height={1000}
          src='/Charts.png'
        />
      </div>
    </div>
  );
}

export default BriefHistory;
