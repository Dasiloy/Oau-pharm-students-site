import React from "react";

export default function Home() {
  return (
    <main className='p-24'>
      <div
        data-aos='fade-up'
        data-aos-duration='3000'
        className='bg-red-500 w-20 h-20 mb-5'>
        hello there
      </div>
      <button className='bg-red-500 text-white px-6 py-6'>
        hello from button
      </button>
    </main>
  );
}
