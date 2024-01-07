import React from 'react'
import Formation from '../../app/../../public/Formation.png';

function page() {
  return (
    <div>
      <HeroPageCard headings={'Our Activities'} />
      <ActivityTopBody
        header={'Health Outreaches'}
        body={body}
        ClassName={'mt-20 leading-4'}
        bodyStyle={'font-semibold'}
      />
    </div>
  );
}

export default page