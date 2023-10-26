import React from 'react'
import ExecutiveCard from '../../About-us/Leadership/Components/ExecutiveCard'
import {OtherAlumniData} from '../ConvoData/otherAlumniData'
function OtherAlumni() {
  return (
    <div>
      <div>
        <h1 className='md:text-5xl text-3xl text-orange font-bold mt-16 md:mt-20 text-center'>Other Alumni Interviewed in the Past</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-10 md:mt-16 w-11/12 m-auto gap-y-5'>
      {OtherAlumniData.map((e)=>{
        return (
          <div key={e.id} className='flex justify-center'>
            <ExecutiveCard
              title={e.title}
              image={e.image}
              name={e.name}
            />
            ;
          </div>
        );
      }) }
      </div>
    </div>
  );
}

export default OtherAlumni