import React from 'react'

function ActivityTopBody({ header, body, ClassName, bodyStyle }) {
  return (
    <div className={`flex ${ClassName} flex-col   items-center justify-center`}>
      <h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>
        {header}
      </h2>
      <h1 className={`text-dark-dark-100 text-md lg:text-lg mt-3 ${bodyStyle} font-normal  items-center justify-center text-center w-11/12 lg:w-[80%]`}>
        {body}
      </h1>
    </div>
  );
}

export default ActivityTopBody