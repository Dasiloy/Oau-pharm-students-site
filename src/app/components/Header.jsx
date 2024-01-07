import React from 'react'

function Header({headerContent}) {
  return (
    <div className=' text-center font-bold text-[40px] mt-10 text-orange'>
        <h1 >{headerContent}</h1>
    </div>
  )
}

export default Header