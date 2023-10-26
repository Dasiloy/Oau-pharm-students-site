import React from 'react'
import {ConvoData} from './../ConvoData/ConvoData'

const AlumniCoversation= () => {
  return (
    <div className=' mt-20 grid gap-y-10'>
      {ConvoData.map((e)=>{
        return (
          <div key={e.id} className='w-11/12 m-auto text-xl md:text-2xl'>
            <div>
              <p className=' text-fuchsia-800'>
                <span className=' font-bold'>{e.questionSource} </span>
                {e.question}
              </p>
            </div>
            <div className=' mt-10'>
              <p>
                <span className=' text-blue-900 font-bold'>
                  {e.replierSource}
                </span>
                {e.replies}
              </p>
            </div>
          </div>
        );
        })}
    </div>
  );
}

export default AlumniCoversation